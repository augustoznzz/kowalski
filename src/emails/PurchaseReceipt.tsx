import React from 'react';
import { Html, Head, Preview, Body, Container, Section, Heading, Text, Img, Link, Hr } from '@react-email/components';
import { Product } from '@/data/products';

interface PurchaseReceiptEmailProps {
  products: Product[];
  total: number;
}

const PurchaseReceiptEmail: React.FC<PurchaseReceiptEmailProps> = ({ products, total }) => {
  return (
    <Html>
      <Head />
      <Preview>Obrigado pela sua compra na Kowalski!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={heading}>Kowalski</Heading>
          </Section>
          <Section style={content}>
            <Heading as="h2" style={subheading}>Obrigado pela sua compra!</Heading>
            <Text style={paragraph}>
              Olá,
            </Text>
            <Text style={paragraph}>
              Seu pedido foi processado com sucesso. Você pode baixar seus produtos digitais usando os links abaixo.
            </Text>

            <Hr style={hr} />

            {products.map((product) => (
              <Section key={product.id} style={productSection}>
                <Img src={`https://raw.githubusercontent.com/augustoznzz/kowalski/main/public${product.image}`} alt={product.name} width="80" height="80" style={productImage} />
                <div style={productDetails}>
                  <Text style={productName}>{product.name}</Text>
                  <Text style={productDescription}>{product.description}</Text>
                  <Link href={`#`} style={downloadLink}>
                    Baixar {product.name}
                  </Link>
                </div>
              </Section>
            ))}

            <Hr style={hr} />

            <Section style={totalSection}>
              <Text style={totalText}>Total: R$ {total.toFixed(2)}</Text>
            </Section>

            <Text style={paragraph}>
              Se você tiver alguma dúvida, responda a este e-mail. Estamos aqui para ajudar!
            </Text>
            <Text style={paragraph}>
              — A equipe Kowalski
            </Text>
          </Section>
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Kowalski. Todos os direitos reservados.
            </Text>
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
  alignItems: 'center',
  padding: '16px 0',
};

const productImage = {
  borderRadius: '8px',
  marginRight: '20px',
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
  fontSize: '14px',
  color: '#007bff',
  textDecoration: 'underline',
};

const totalSection = {
  padding: '16px 0',
  textAlign: 'right' as const,
};

const totalText = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#212529',
};

const footer = {
  padding: '20px 0',
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#6c757d',
};
