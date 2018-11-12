pipeline {
  agent none
  stages {
    stage('check project') {
      steps {
        sh '''npm install
node -v 
npm -v'''
      }
    }
    stage('check docker') {
      steps {
        echo 'ok'
      }
    }
  }
}