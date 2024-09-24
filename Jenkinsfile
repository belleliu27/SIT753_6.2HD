pipeline {
    agent any 
    environment {
        // Add Docker path to Jenkins' environment path
        PATH = "/usr/local/bin:${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t belle/portfolio-app .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests in the Docker container
                    sh 'docker run --rm belle/portfolio-app npm test'
                }
            }
        }
        stage('Code Quality Analysis') {
            steps {
                script {
                    // Run ESLint for code quality analysis
                    sh 'docker run --rm belle/portfolio-app npx eslint .'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy the application (run it in a detached Docker container)
                    sh 'docker run -d --name portfolio-app -p 3000:3000 belle/portfolio-app'
                }
            }
        }
        stage('Release') {
            steps {
                // Implement release promotion logic if applicable
                echo 'Release stage: Promoting the application to production...'
                // Example: You could integrate with AWS CodeDeploy or any other release tool
            }
        }
        stage('Monitoring') {
            steps {
                // Implement monitoring setup if applicable
                echo 'Monitoring stage: Configuring monitoring tools...'
                // Example: You could add commands to set up Datadog, New Relic, etc.
            }
        }
    }

    post {
        always {
            script {
                // Clean up any running containers after the pipeline execution
                sh 'docker rm -f portfolio-app || true'
            }
        }
    }
}
