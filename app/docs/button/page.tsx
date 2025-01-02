import { PageLayout } from "@/components/layouts/page-layout";

export default function InlineButtonsDoc() {
  return (
    <PageLayout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Inline Buttons Documentation</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Inline buttons in FeedsGram are an interactive feature allowing users to perform 
            specific actions like opening URLs or triggering alerts directly from bot messages. 
            Below is a detailed guide to implementing and using inline buttons effectively.
          </p>

          <h2>Types of Inline Buttons</h2>

          <h3>1. URL Button</h3>
          <p>
            <strong>Format:</strong> <code>{'</Text:Url>'}</code>
          </p>
          <p>
            <strong>Functionality:</strong> Redirects the user to a specified web page when clicked.
          </p>
          <p>
            <strong>Example:</strong>  
            A button labeled "Learn More" links to <code>https://example.com</code>.  
            When clicked, it opens the URL in the user’s browser.
          </p>

          <h3>2. Alert Button</h3>
          <p>
            <strong>Format:</strong> <code>{'</Text:Alert>'}</code>
          </p>
          <p>
            <strong>Functionality:</strong> Displays a predefined pop-up alert or a bot-generated 
            message when clicked.
          </p>
          <p>
            <strong>Example:</strong>  
            A button labeled "Notify Me" triggers an alert saying, "Notification Received!"  
            This is useful for providing feedback or confirmations.
          </p>

          <h3>3. Dual Buttons in a Single Line</h3>
          <p>
            <strong>Format:</strong> <code>{'<<</Text:Url> </Text:Alert>>'}</code>
          </p>
          <p>
            <strong>Functionality:</strong> Displays two buttons in one line, combining the 
            functionalities of URL and alert buttons.
          </p>
          <p>
            <strong>Example:</strong>  
            - Button 1: "Visit Us" redirects to a URL.  
            - Button 2: "Get Alert" triggers a notification message.  

          <h2>Use Cases</h2>
          <ul>
            <li>
              <strong>Customer Support:</strong> Direct users to FAQs (URL) or confirm 
              their queries (Alert).
            </li>
            <li>
              <strong>Promotions:</strong> Share offers via URL buttons, and use alerts 
              to notify about expiring deals.
            </li>
            <li>
              <strong>Feedback Collection:</strong> Create "Yes" or "No" alert buttons 
              for quick surveys.
            </li>
          </ul>

          <h2>Best Practices</h2>
          <ul>
            <li>Use concise, descriptive labels for buttons.</li>
            <li>Ensure alert messages provide clear feedback or guidance.</li>
            <li>Test the functionality of URLs and alerts to confirm accuracy.</li>
            <li>Combine buttons wisely to avoid visual or functional clutter.</li>
          </ul>

          <h2>Advantages of Inline Buttons</h2>
          <ul>
            <li>Improves user engagement with actionable elements.</li>
            <li>Streamlines navigation, reducing the need for complex commands.</li>
            <li>Provides immediate feedback with alert messages.</li>
            <li>Customizable to suit a variety of use cases.</li>
          </ul>

          <h2>Examples in Action</h2>
          <p>
            - A support bot could use <code>{'</Help:Url>'}</code> to open a help page  
            and <code>{'</Contact Us:Alert>'}</code> to notify the team when clicked.  
          </p>

          <p>
            For more details, visit the <a href="https://feedsgram.netlify.app">FeedsGram Website</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
