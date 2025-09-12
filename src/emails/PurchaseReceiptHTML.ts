import { Product } from '@/data/products';

interface PurchaseReceiptEmailProps {
  products: (Product & { downloadUrl: string })[];
  orderId: string;
}

export function generateEmailHTML({ products, orderId }: PurchaseReceiptEmailProps): string {
  const total = products.reduce((sum, p) => sum + p.price, 0);

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recibo de Compra - Kowalski</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #CDFF00;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #282828;
            font-size: 28px;
            margin: 0;
        }
        .order-info {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 25px;
        }
        .product {
            border: 1px solid #e9ecef;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        .product-image {
            width: 60px;
            height: 60px;
            background-color: #f1f3f5;
            border-radius: 5px;
            margin-right: 15px;
        }
        .product-details {
            flex-grow: 1;
        }
        .product-name {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
        }
        .product-description {
            color: #6c757d;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .download-button {
            background-color: #CDFF00;
            color: #000;
            padding: 8px 16px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            display: inline-block;
        }
        .total {
            text-align: right;
            font-size: 18px;
            font-weight: bold;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 2px solid #e9ecef;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            color: #6c757d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Kowalski</h1>
            <p>Obrigado pela sua compra! 🎉</p>
        </div>
        
        <p>Olá,</p>
        <p>Seu pedido foi processado com sucesso. Abaixo estão os links para download imediato dos seus arquivos digitais.</p>
        
        <div class="order-info">
            <strong>ID do Pedido:</strong> ${orderId}
        </div>
        
        ${products.map(product => `
            <div class="product">
                <div class="product-image"></div>
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <a href="${product.downloadUrl}" class="download-button">Baixar Agora</a>
                </div>
                <div style="text-align: right;">
                    <strong>R$ ${product.price.toFixed(2)}</strong>
                </div>
            </div>
        `).join('')}
        
        <div class="total">
            Total Pago: R$ ${total.toFixed(2)}
        </div>
        
        <p>Se você tiver dúvidas ou não conseguir acessar os arquivos, basta responder este e-mail.</p>
        <p>— Equipe Kowalski</p>
        
        <div class="footer">
            © ${new Date().getFullYear()} Kowalski. Todos os direitos reservados.
        </div>
    </div>
</body>
</html>`;
}