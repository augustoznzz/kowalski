import React from 'react';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Img, Link, Hr } from '@react-email/components';
import { Product } from '@/data/products';

interface PurchaseReceiptEmailProps {
  products: (Product & { downloadUrl: string })[];
  orderId: string;
}

const PurchaseReceiptEmail: React.FC<PurchaseReceiptEmailProps> = ({ products, orderId }) => {
  const total = products.reduce((sum, p) => sum + p.price, 0);

  return (
    <Html>
      <Head />
      <Preview>Recibo e downloads do seu pedido #{orderId}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={heading}>Kowalski</Heading>
          </Section>
          <Section style={content}>
            <Heading as="h2" style={subheading}>Obrigado pela sua compra! 🎉</Heading>
            <Text style={paragraph}>Olá,</Text>
            <Text style={paragraph}>Seu pedido foi processado com sucesso. Abaixo estão os links para download imediato dos seus arquivos digitais.</Text>
            <Text style={paragraph}><strong>ID do Pedido:</strong> {orderId}</Text>

            <Hr style={hr} />

            {products.map((product) => (
              <Section key={product.id} style={productSection}>
                <Img
                  src={`https://raw.githubusercontent.com/augustoznzz/kowalski/main/public${product.image}`}
                  alt={product.name}
                  width="72"
                  height="72"
                  style={productImage}
                />
                <div style={productDetails}>
                  <Text style={productName}>{product.name}</Text>
                  <Text style={productDescription}>{product.description}</Text>
                  <Link href={product.downloadUrl} style={downloadLink}>Baixar Agora</Link>
                </div>
                <div style={priceWrapper}><Text style={price}>R$ {product.price.toFixed(2)}</Text></div>
              </Section>
            ))}

            <Hr style={hr} />

            <Section style={totalSection}>
              <Text style={totalText}>Total Pago: R$ {total.toFixed(2)}</Text>
            </Section>

            <Text style={paragraph}>Se você tiver dúvidas ou não conseguir acessar os arquivos, basta responder este e-mail.</Text>
            <Text style={paragraph}>— Equipe Kowalski</Text>
          </Section>
          <Section style={footer}>
            <Text style={footerText}>© {new Date().getFullYear()} Kowalski. Todos os direitos reservados.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default PurchaseReceiptEmail;

// Estilos
const main = {
  backgroundColor: '#f8f9fa',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const header = {
  padding: '20px 0',
  textAlign: 'center' as const,
  borderBottom: '1px solid #e9ecef',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#212529',
};

const content = {
  padding: '32px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
};

const subheading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#212529',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#495057',
};

const hr = {
  borderColor: '#e9ecef',
  margin: '20px 0',
};

const productSection = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '16px 0',
  borderBottom: '1px solid #eef1f4'
};

const productImage = {
  borderRadius: '8px',
  marginRight: '20px',
  backgroundColor: '#f1f3f5'
};

const productDetails = {
  flex: 1,
};

const productName = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#212529',
  margin: '0 0 8px 0',
};

const productDescription = {
  fontSize: '14px',
  color: '#6c757d',
  margin: '0 0 12px 0',
};

const downloadLink = {
  fontSize: '13px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  textDecoration: 'none',
  padding: '6px 12px',
  borderRadius: '4px',
  display: 'inline-block',
  marginTop: '4px'
};

const totalSection = {
  padding: '16px 0',
  textAlign: 'right' as const,
};

const totalText = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#212529'
};

const priceWrapper = { minWidth: '90px', textAlign: 'right' as const };
const price = { fontSize: '14px', fontWeight: 600, color: '#212529', marginTop: '6px' };

const footer = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#6c757d',
};
