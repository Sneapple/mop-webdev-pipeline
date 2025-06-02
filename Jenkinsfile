pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    echo 'Installing backend dependencies...'
                    bat 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo 'Building React app...'
                    bat 'npm run build'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                dir('backend') {
                    echo 'Running backend tests...'
                    // Placeholder: Add real tests later
                    bat 'echo "No backend tests yet"'
                }
            }
        }

        stage('Run Frontend Tests') {
            steps {
                dir('frontend') {
                    echo 'Running frontend tests...'
                    bat 'npm test -- --watchAll=false --passWithNoTests'
                }
            }
        }

        stage('Deploy (Dev/Test)') {
            steps {
                echo 'Deploying to dev environment (placeholder)...'
                // Here you can call Docker, SCP, or deploy to staging
                bat 'echo "Deployed!"'
            }
        }
    }

    post {
        success {
            echo ' Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
