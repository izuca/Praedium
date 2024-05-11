# PRAEDIUM

## Visão geral
Trata-se de um projeto pessoal voltado para anúncios de imóveis
## Requisitos
- **R01** - Há usuários e anunciantes
- **R02** - Os anunciantes devem se cadastrar e realizar login para que possam anunciar imóveis
- **R03** - Ao anunciar, os anunciantes irão disponibilizar diversas informações
- **R04** - Os anunciantes devem informar o mesmo número de telefone em todos os imóveis anunciados
- **R05** - Os anunciantes podem criar, editar, visualizar e excluir seus anúncios de imóveis
- **R06** - Os usuários podem filtrar imóveis e visualizá-los
## Regras de Negócio
**Cadastro de Anunciantes:**
- Os anunciantes devem fornecer informações obrigatórias para se cadastrarem, como nome, endereço de e-mail, senha, número de telefone e informações de contato profissional.
- A verificação de e-mail pode ser necessária para validar as contas.
Autenticação de Usuários e Anunciantes:
- Os anunciantes devem fazer login com suas credenciais para acessar as funcionalidades do aplicativo.
  
**Anúncio de Imóveis:**

- Os anunciantes devem fornecer informações detalhadas sobre os imóveis que desejam anunciar, como tipo de imóvel, localização, preço, número de quartos, etc.
- Deve haver validação dos dados inseridos pelos anunciantes para garantir a precisão das informações

**Validação do Número de Telefone:**

- Os anunciantes devem informar o mesmo número de telefone em todos os imóveis anunciados para facilitar o contato dos interessados.

**Gerenciamento de Anúncios:**

- Os anunciantes podem criar, editar, visualizar e excluir seus próprios anúncios de imóveis.
- Somente os anunciantes que criaram o anúncio têm permissão para editá-lo ou excluí-lo.

**Visualização de Imóveis por Usuários:**

- Os usuários podem filtrar os imóveis com base em critérios como localização, preço, número de quartos, etc.
- Os usuários podem visualizar os detalhes dos imóveis, incluindo fotos e informações fornecidas pelos anunciantes.

**Privacidade e Segurança:**

- As informações dos usuários e anunciantes devem ser protegidas de acordo com as leis de privacidade de dados.
- O aplicativo deve implementar medidas de segurança para proteger os dados e prevenir acesso não autorizado.

**Feedback e Suporte:**

- Os usuários devem ter a possibilidade de fornecer feedback sobre os imóveis e a experiência de uso do aplicativo.
- Deve haver um canal de suporte para os usuários relatarem problemas ou fazerem perguntas relacionadas ao aplicativo.


