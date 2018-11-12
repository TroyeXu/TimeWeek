pipeline {
  agent none
  stages {
    stage('check project') {
      steps {
        sh 'npm -v'
      }
    }
    stage('check docker') {
      steps {
        echo 'ok'
      }
    }
  }
}