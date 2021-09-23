pipeline {
  agent any 
  
  stages {
    stage("build") {
      steps {
        echo 'Hello from build stage!'
        sh 'npm i'
      }
    }
    stage("run") {
      steps {
        echo 'Hello from run scanner'
        sh 'npm run serve -- --port=4000'
      }
    }
  }
}
