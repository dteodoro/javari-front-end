pipeline {
  tools {
    nodejs 'nodejs'
  }
  environment {
    sshServer = "${sshServer}"
    sshUser = "${sshUser}"
  }
  agent any
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master',
            credentialsId: 'dteodoro-github',
            url: 'https://github.com/dteodoro/javari-front-end.git'
      }
    }
    stage('Build Javari') {
      steps {
        sh "npm install"
        sh "npm run build"
      }
    }
     stage('Deploy') {
       steps {
         sshagent(credentials : ['javari-prd-credencial']){
           echo "Send files to Server" 
           sh "scp ./**/target/*App.jar ${sshUser}@${sshServer}:~/build/front/ "
         }
       }
     }
  }
}
