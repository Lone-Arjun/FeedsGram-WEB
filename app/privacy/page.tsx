import { PageLayout } from "@/components/layouts/page-layout";

export default function Privacy() {
  return (
    <PageLayout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">
          Privacy Policy
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>Effective Date: 25 December 2024</p>

          <p>Welcome to FeedsGram. Protecting your privacy and ensuring the security of your personal data is our top priority. This Privacy Policy explains how we collect, use, store, and safeguard the information you share with us through the Bot. By using the Bot, you consent to the practices described in this document.</p>

          <h2>1. Scope of the Privacy Policy</h2>
          <p>This Privacy Policy applies to all interactions with the Bot on Telegram. It governs the data collection, processing, and usage practices specifically related to the Bot's functionalities. Please note that this policy does not apply to any other Telegram bots, applications, or services.</p>

          <h2>2. Information We Collect</h2>
          <p>We only collect data that is essential for the Bot’s intended operations. The types of information collected include:</p>
          <ul>
            <li><strong>a. User Information</strong>
              <ul>
                <li><strong>Telegram Username:</strong> Collected to identify and respond to users effectively.</li>
                <li><strong>User ID:</strong> Used as a unique identifier for executing Bot commands and ensuring proper functionality.</li>
                <li><strong>Profile Photo (Optional):</strong> Only collected if necessary for specific Bot features (e.g., for moderation purposes).</li>
              </ul>
            </li>
            <li><strong>b. Group Information</strong>
              <ul>
                <li><strong>Group Name and ID:</strong> Used to identify the group where the Bot is deployed and perform administrative tasks.</li>
                <li><strong>Messages Sent to the Bot:</strong> Only messages or commands directed explicitly to the Bot are logged to provide requested services.</li>
              </ul>
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected data for the following purposes:</p>
          <ul>
            <li><strong>a. Administrative and Moderation Tasks:</strong> To perform actions such as approving or banning members, deleting messages, and other group management functions. To log and execute specific commands issued by administrators.</li>
            <li><strong>b. User Support:</strong> To respond to queries or issues raised by group administrators or users via the Bot.</li>
            <li><strong>c. Performance Monitoring:</strong> To analyze how the Bot is used and implement improvements to enhance its performance and reliability.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We are committed to securing your data and ensuring its confidentiality. Here are the measures we take to protect your information:</p>
          <ul>
            <li><strong>Encryption:</strong> All data transmitted between the Bot and Telegram servers is encrypted by default.</li>
            <li><strong>Access Control:</strong> Only authorized personnel have access to data collected by the Bot.</li>
            <li><strong>Secure Storage:</strong> Data is stored in secure databases with robust protection measures in place to prevent unauthorized access.</li>
          </ul>
          <p>While we strive to protect your data, please note that no digital system is completely secure. Users are encouraged to avoid sharing sensitive or unnecessary personal information through the Bot.</p>

          <h2>5. User Rights</h2>
          <p>You have the following rights concerning your data collected by the Bot:</p>
          <ul>
            <li><strong>a. Right to Access:</strong> You can request details of the information we have collected about you. This includes a summary of all interactions logged by the Bot.</li>
            <li><strong>b. Right to Rectification:</strong> If any of your data is inaccurate or incomplete, you may request corrections to ensure its accuracy.</li>
            <li><strong>c. Right to Data Deletion:</strong> You have the right to request the deletion of your data at any time. This includes:
              <ul>
                <li>Deleting user information stored by the Bot.</li>
                <li>Removing message logs or chat histories.</li>
              </ul>
            </li>
            <li><strong>d. Right to Restrict Processing:</strong> You may choose to limit how your data is processed, which may affect certain Bot functionalities.</li>
          </ul>
          <p>To exercise any of these rights, please contact us through the details provided in Section 8.</p>

          <h2>6. User Responsibilities</h2>
          <p>To ensure the safety and functionality of the Bot:</p>
          <ul>
            <li>Do not share sensitive personal information (e.g., passwords, financial details) with the Bot.</li>
            <li>Use the Bot only for its intended purposes.</li>
            <li>Report any misuse or unauthorized access to your data immediately.</li>
          </ul>
          <p>Failure to adhere to these guidelines may result in the Bot’s restricted functionality or removal from your group.</p>

          <h2>7. Amendments to the Privacy Policy</h2>
          <p>We reserve the right to update or modify this Privacy Policy as necessary. In case of significant changes, we will notify users through the Update Channel. It is recommended to review this policy periodically to stay informed about our practices.</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us:</p>
          <ul>
            <li>Email: am.42.mail@gmail.com</li>
            <li>Telegram: @FeedsGramSupport</li>
          </ul>

          <p>By using FeedsGram, you acknowledge that you have read, understood, and agreed to this Privacy Policy. Your trust is important to us, and we are committed to safeguarding your data while delivering the best possible service.</p>
        </div>
      </div>
    </PageLayout>
  );
}
