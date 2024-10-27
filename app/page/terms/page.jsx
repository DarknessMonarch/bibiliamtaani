"use client";

import styles from "@/app/style/info.module.css";

export default function TermsPage() {
  return (
    <div className={styles.infoWrapper}>
      <h1>Terms of Service for Bibilia Mashinani USSD System </h1>
      <div className={styles.infoContain}>
        <div className={styles.contain}>
          <h2>1.Acceptance of Terms</h2>
          <p>
          By using the Bibilia Mashinani USSD system, you agree to these Terms of Service. If you do not agree, please do not use the service
          </p>
          <h2>2. Description of Service </h2>
          <p>
          Bibilia Mashinani provides users with access to gospel content through a USSD system. The service is designed to spread the message of the gospel in an accessible manner.

          </p>
          <h2> 3. User Responsibilities
          </h2>
          <p>
          Users must provide accurate information when prompted
          </p>
          <p>
          Users are responsible for maintaining the confidentiality of their personal information.
          </p>
          <p>
            Users agree not to use the service for illegal or harmful activities.
          </p>
          <h2>4. Charges</h2>
          <p>
          Standard USSD charges will  apply based on the user's mobile network provider. Users should check with their provider for details.
          </p>
          <h2> 5. Intellectual Property </h2>
          <p>
          All content, trademarks, and other intellectual property associated with Bibilia Mashinani are owned by  Bibilia mashinani development team and our licensors. Users should not reproduce or distribute any content without permission.

          </p>
          <h2>6. Limitation of Liability </h2>
          <p>
          Bibilia Mashinani is not liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use the service.

          </p>
          <h2>7. Changes to Terms
          </h2>
          <p>
          We reserve the right to modify these Terms of Service at any time. Users will be notified of major changes.

          </p>
          <h2>
            8. Governing Law
          </h2>
          <p>
          These terms are governed by the laws of the jurisdiction in which Bibilia Mashinani operates.

          </p>
          <h2>9. Governing Law</h2>
          <p>
            Specification that these terms are governed by the laws of the
            relevant jurisdiction
          </p>
        </div>
      </div>
    </div>
  );
}
