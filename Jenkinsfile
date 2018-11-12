pipeline {
  agent none
  stages {
    stage('check project') {
      steps {
        echo 'aaa'
      }
    }
    stage('check docker') {
      steps {
        echo 'ok'
      }
    }
    stage('test') {
      steps {
        timeout(time: 111111111, activity: true)
      }
    }
  }
}