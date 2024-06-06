pipeline {
    agent any

     tools {
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
     }

    stages{

        stage('Checkout'){
           steps{
                checkout scm
           }
        }

        stage('Npm install'){
          steps{
            nodejs('node_v_16_17_0') {
              sh label: "npm install", script: 'npm install --legacy-peer-deps'
            }
          }
        }

        stage('Npm install echarts'){
          steps{
            nodejs('node_v_16_17_0') {
              sh label: "npm install", script: 'npm install echarts --legacy-peer-deps'
            }
          }
        }



        stage('Packaging'){
            steps{
                nodejs('node_v_16_17_0') {
                    sh label: "build", script: 'ng build --aot --configuration=production --base-href /'
                }
            }
        }

        stage('Image docker en Construction...'){
	        when{
            branch 'master'
          }
          steps{
            script {

              def PROJECT = readJSON file: 'package.json'

              withDockerRegistry(credentialsId: "registry_skyticket_auth", toolName: "docker", url: "https://registry.gitlab.com") {
                  sh label: 'Docker build', script: "docker build -t registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:${PROJECT.version} .";
                  sh label: 'Push sur registry', script: "docker push registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:${PROJECT.version}"
                  sh label: 'Creation tag sur registry', script: "docker tag registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:${PROJECT.version} registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:latest"
                  sh label: 'Push sur registry image latest', script: "docker push registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:latest"
                  sh label: 'suppression de l\'image docker créee', script: "docker image rm registry.gitlab.com/devskysofttechnology/skystagiare/${PROJECT.name}:${PROJECT.version}"
              }
            }
          }
        }

        stage('Deploiement Image docker'){
	          when{
               branch 'master'
             }
             steps{
                script {
                    withDockerRegistry(credentialsId: "registry_skyticket_auth", toolName: "docker", url: "https://registry.gitlab.com") {
                        sh label: 'Docker Stack Deploy', script: 'docker stack deploy --with-registry-auth --compose-file docker-stack.yml devops';
                    }
                }
            }
         }
    }

    post{
        always{
            echo 'Cleaning the workspace ...'
            cleanWs notFailBuild: true
        }
    }
}
