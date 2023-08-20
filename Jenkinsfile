pipeline {
  tools {
    nodejs 'nodejs'
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
      }
    }
     stage('Deploy') {
       steps {
         sh "ls -la"
       }
     }
  }
}
