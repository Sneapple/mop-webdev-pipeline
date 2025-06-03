pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {

        // 1️ Checkout
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // 2️  Build Stage
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo 'Building React app...'
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    echo 'Building backend (placeholder)...'
                    // Example: if backend is Node.js, skip build
                    // If Java → could run: bat 'mvn clean package'
                    bat 'echo "No backend build required"'
                }
            }
        }

        // 3️ Test Stage
        stage('Run Frontend Tests') {
            steps {
                dir('frontend') {
                    echo 'Running frontend tests...'
                    bat 'npm test -- --watchAll=false --passWithNoTests'
                }
            }
        }

        stage('Run Backend Tests') {
            steps {
                dir('backend') {
                    echo 'Running backend tests...'
                    // Example for Node.js backend tests:
                    // bat 'npm run test'
                    bat 'echo "No backend tests yet"'
                }
            }
        }

        // 4️ Code Quality Stage
        stage('Code Quality - SonarCloud') {
            steps {
                withCredentials([string(credentialsId: 'SONAR_TOKEN', variable: 'SONAR_TOKEN')]) {
                    echo 'Running SonarCloud scan...'
                    bat """
                        sonar-scanner ^
                        -Dsonar.projectKey=Sneapple_mop-webdev-pipeline ^
                        -Dsonar.organization=sneapple ^
                        -Dsonar.sources=. ^
                        -Dsonar.host.url=https://sonarcloud.io ^
                        -Dsonar.token=%SONAR_TOKEN%
                    """
                }
            }
        }
        // 5️ Security Stage
        stage('Security Scan') {
            steps {
                dir('frontend') {
                    echo 'Running npm audit for frontend security...'
                    bat 'npm audit --audit-level=high || exit 0'
                }
                dir('backend') {
                    echo 'Running npm audit for backend security...'
                    bat 'npm audit --audit-level=high || exit 0'
                }
                // Optional: add OWASP Dependency-Check, Trivy, Retire.js here
            }
        }

        //  6 Deploy Stage (Dev/Test)
        stage('Deploy (Dev/Test)') {
            steps {
                echo 'Deploying to Dev/Test environment...'
                // Example with Docker Compose:
                // bat 'docker-compose up -d --build'
                bat 'echo "Deployed to Dev/Test (placeholder)"'
            }
        }

        // 7 Release Stage (Production)
        stage('Release to Production') {
            steps {
                echo 'Releasing to Production...'
                // Example: tag release, deploy to prod
                // bat 'git tag v1.0.$BUILD_NUMBER'
                // bat 'git push origin --tags'
                bat 'echo "Released to Production (placeholder)"'
            }
        }

        // 8 Monitoring Stage
        stage('Monitoring & Alerting') {
            steps {
                echo 'Monitoring application...'
                // Example: health check + alert
                // bat 'curl -f http://your-app/health || echo "ALERT: App down!"'
                bat 'echo "Monitoring complete (placeholder)"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
