import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="GUIDE">
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Installation Guide</h1>
          <p>
            Each component is crafted with precision to ensure accessibility and ease of use, allowing you to enhance
            your application's interface with minimal effort.
          </p>
        </header>

        <section className={styles.section}>
          <h2>Download</h2>
          <p>Nexus-UI is available on npm.</p>

          <div className={styles.codeSection}>
            <h3>Using npm</h3>
            <CodeBlock language="bash">npm install @tony9090/nexus-ui</CodeBlock>
          </div>

          <div className={styles.codeSection}>
            <h3>Using yarn</h3>
            <CodeBlock language="bash">yarn add @tony9090/nexus-ui</CodeBlock>
          </div>

          <div className={styles.codeSection}>
            <h3>Using pnpm</h3>
            <CodeBlock language="bash">pnpm add @tony9090/nexus-ui</CodeBlock>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Import</h2>
          <p>
            Each component can be imported individually so that you only bundle what you use. Import paths are available
            in the documentation of the corresponding component.
          </p>
          <CodeBlock language="jsx">
            {`import { Button } from '@tony9090/nexus-ui';

export default function MyComponent() {
  return <Button label="Nexus" />;
}`}
          </CodeBlock>
        </section>
      </main>
    </Layout>
  );
}
