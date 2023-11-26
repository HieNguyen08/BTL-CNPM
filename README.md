# BTL-CNPM
## Overview
The Student Smart Printing Service (HCMUT_SSPS) is a web-based application designed to provide a seamless printing experience for students within the campuses of Ho Chi Minh University of Technology. This system allows students to upload documents, choose printers, and specify printing properties, while also providing administrators with tools for configuration and monitoring.

***
## Stakeholders:   
- **Student**
   - End users of the HCMUT-SPSS
- **SPSO**
   - Configuring and managing the printing service 
   - Overseeing the printing history of students
- **Bkpay**
   - Managing online payments and checkouts for purchases beyond the default number of pages
   - BKPay can be integrated to link directly to students' bank accounts
- **Maintance System**
   - This system will switch to an alternative system when the current system is experiencing malfunctions, providing the maintenance team with the ability to repair issues
   - Upgrading and improving the printing system based on feedback from students or the SPSO
## Features
- **Print Document:**
  - Upload documents for printing
  - Select printer, paper size, and other printing properties
- **Logging:**
  - System logs printing actions, including student ID, printer ID, file name, start and end time, and the number of pages for each page size.
- **Student Account Management:**
  - Students are allocated a default number of A4-size pages per semester.
  - Students can purchase additional pages using an online payment system.
- **Administration:**
  - Student Printing Service Officer (SPSO) can manage printers (add/enable/disable).
  - SPSO can configure system settings such as default pages, permitted file types, etc.
- **Reports:**
  - Automatic generation of monthly and yearly reports on system usage.
  - SPSO can view printing history for all students or specific students and printers.
 
## Requiremens

- **Student**
  - **Login/Logout:** Capability for students to log in and log out of the system.
  - **Upload Documents:** Ability for students to upload documents (.pdf, .docx, .pptx, etc.) to the system.
  - **Select Printer:** Capability for students to choose a printer from the list of available printers. 
  - **View Printing history:** Students should have the ability to view the history of previously printed documents.
  - **Payment:** If the system requires payment, students should have the ability to make payments through the BKPay system.

- **SPSO**
  - **Printer Management:** Ability to add, edit, and delete printers within the system. Adjustment of the printer status, such as enabling or disabling. 
  - **Monitor Printing History:** View and generate reports on the printing history of all students and printers.
  - **System Configuration:** Adjust system settings such as the default number of printed pages, the dates for setting the default number of pages, accepted file formats, and printing prices.
  - **Access Reports:** Access reports on system usage, which are automatically generated at the end of each month and year, and stored in the system.
  - **Document Management:** SPSO can manage the system's document repository, both the general storage and individual student repositories.

- **Maintance system**
  - **Monitor Printer Status:** Check the operational status of all printers, including ink/paper levels, and other potential issues.
  - **Incident Management:** Receive and address incident reports, categorizing them based on priority levels.
  - **Software Updates:** Centrally update the system software and printer software.
  - **Access Control Management:** Adjust and assign access permissions within the system, allowing only authorized personnel to perform maintenance tasks. Additionally, the team is responsible for granting access permissions to students to use the system.
  - **Activity Reporting:** Generate and view reports on maintenance activities, including feedback response time, issue resolution time, and the status of printers.

- **BKpay** 
  - **Payment Transactions:** Provide the ability to securely and quickly execute payment transactions for printing services.
  - **Reports and Invoices:** Automatically generate reports and invoices after each successful transaction.
  - **Check Transaction Status:** Provide users and administrators with the ability to check the status of payment transactions.
  - **Notifications:** Send automatic notifications to users regarding the status of their transactions through email, SMS, or other means.

***

## System modelling

![anh](1.png)






