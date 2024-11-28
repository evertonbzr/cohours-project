![hero](github.png)

<p align="center">
	<h1 align="center"><b>CoHours</b></h1>
<p align="center">
    Gerenciador de horas complementares para Universidades.
  </p>
</p>

## About

## Features

<!-- **Time Tracking**: Allows for live time tracking of projects to boost productivity and collaboration, providing insightful project overviews.<br/>
**Invoicing**: An upcoming feature that will enable users to create web-based invoices, collaborate in real-time, and synchronize projects seamlessly.<br/>
**Magic Inbox**: Automatically matches incoming invoices or receipts to the correct transactions, simplifying financial tracking and organization.<br/>
**Vault**: Secure storage for important files like contracts and agreements, keeping everything in one place for easy access​.<br/>
**Seamless Export**: Facilitates easy export of financial data, packaged neatly in CSV files for accountants.<br/>
**Assistant**: Provides tailored insights into financial situations, helping users understand spending patterns, cut costs, and find documents.<br/> -->

<br/>

## Get started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Functional Requirements

### **1. Student Management**

- The course coordinator must be able to add, edit, and view students in the course.
- The course coordinator must be able to import student lists in bulk.

### **2. Hours Coordinator Management**

- The course coordinator must be able to add and manage hours coordinators associated with the course.

### **3. Complementary Hours Submission**

- Students must be able to submit complementary hours, including:
  - Uploading supporting documents.
  - Providing activity descriptions and the number of hours.
- Students must be able to track the status of their submissions:
  - Pending.
  - Approved.
  - Rejected.

### **4. Review of Complementary Hours**

- Hours coordinators must be able to:
  - View complementary hours submissions by student.
  - Approve or reject submissions.
  - Provide feedback to students.
  - View uploaded documents.

### **5. Reports and Queries**

- Hours coordinators must be able to generate reports with:
  - Total approved/rejected hours per student.
  - General summaries by course.
- Course coordinators must be able to view students' overall progress.

### **6. Authentication and Access Control**

- The system must allow login for different user types:
  - Student.
  - Course coordinator.
  - Hours coordinator.
- The system must restrict access based on user roles.

### **7. Notifications**

- Students must be notified about changes to the status of their submissions.
- Hours coordinators must be notified about new submissions of complementary hours.

### **8. Admin Dashboard**

- The system must provide a dashboard for managing:
  - Users.
  - Courses.
  - Submitted hours.

## **9. Action Logs**

- The system must record user actions, such as:
  - Approval/rejection of hours.
  - Data edits.

## App Architecture

- React
- Pnpm
- TypeScript
- Nextjs
- Supabase
- Shadcn
- TailwindCSS

### Hosting

- Supabase (database, storage, realtime, auth)
- Vercel (Dashboard, edge-config, and metrics)
- Upstash (redis)

### Services

<!-- - Trigger.dev (background jobs)
- Resend (email)
- Novu (notifications)
- Github Actions (CI/CD)
- GoCardLess (Bank connection EU)
- Plaid (Bank connection in Canada and US)
- Teller (Bank connection in the US)
- Loops (Marketing email)
- OpenPanel (Events and Analytics)
- Dub (Short URLs)
- Polar (Payment processing)
- Typesense (Search) -->

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/5951b6ae5d3740888c2253a32ad90b3091dda922.svg "Repobeats analytics image")
