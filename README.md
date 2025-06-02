# MOP WebDev Pipeline

This project contains a full-stack React + Node.js application integrated with a Jenkins CI/CD pipeline.

## Structure

- `frontend/`: React client
- `backend/`: Node.js API
- `Jenkinsfile`: Jenkins pipeline steps

## Pipeline Stages

- Build frontend
- Build backend
- Run tests
- Lint code
- Audit security
- Deploy (stubbed)

## Dev Commands

Frontend:
```bash
cd frontend
npm install
npm run build
