pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        SONAR_TOKEN = credentials('SONAR_TOKEN')
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

        stage('Code Quality - SonarCloud') {
    steps {
        echo 'Running SonarCloud scan...'
        bat """
            sonar-scanner ^
            -Dsonar.projectKey=Sneapple_mop-webdev-pipeline ^
            -Dsonar.organization=sneapple ^
            -Dsonar.sources=. ^
            -Dsonar.host.url=https://sonarcloud.io ^
            -Dsonar.login=%SONAR_TOKEN%
        """
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
