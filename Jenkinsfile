pipeline {
    agent none
    stages {
        stage('Build and Deploy') {
            agent {
                docker {
                    image 'node:8-alpine'
                }
            }
            steps {
                sh "apk add --no-cache curl"
                sh "curl https://install.meteor.com/ | sh"
                sh "meteor"
                input message: 'Finished using the web site?  (Click "Proceed" to continue)'
            }
        }
    }
}
