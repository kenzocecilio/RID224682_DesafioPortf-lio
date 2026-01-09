import p1 from "../assets/images/redetiete.jpg";

export const projects = [
  {
    id: "p1",
    title: "Chatbot Rede Tietê",
    description:
      "Aplicação em Java para comunicação entre usuários via TCP/IP (sockets TCP), simulando troca de mensagens em rede em um cenário de investigação de poluição no Rio Tietê.",
    image: p1,
    buttonLabel: "Ver detalhes",
    accent: "cyan",
    details:
      "Projeto acadêmico desenvolvido em Java com foco em comunicação em rede usando o protocolo TCP/IP. A aplicação permite que dois ou mais usuários se conectem e troquem mensagens de forma confiável via TCP, utilizando IP/porta para identificar os participantes. O contexto simula a necessidade da Secretaria de Estado do Meio Ambiente em mapear atividades industriais que impactam o Rio Tietê (da nascente em Salesópolis até a Grande São Paulo). As telas foram pensadas para serem simples e intuitivas, cobrindo fluxo de boas-vindas, conexão e envio/recebimento de mensagens.",
  },
];
