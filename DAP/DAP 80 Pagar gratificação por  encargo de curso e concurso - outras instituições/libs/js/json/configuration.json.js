Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 80 Pagar gratificação por  encargo de curso e concurso - outras instituições","publishDate":"30/11/2020 08:04:31","pages":[{"id":"a92a37ad-775c-4759-81bd-c978837d1fe8","name":"[DAP] 80 Pagar gratificação por  encargo de curso e concurso - outras instituições","version":"1.0","author":"priscillasn","image":"files\\diagrams\\DAP]_80_Pagar_gratificacao_por_encargo_de_curso_e_concurso___outras_instituicoes.png","isSubprocessPage":false,"elements":[{"id":"9f0662f9-f57e-436c-9675-2317ac116cb3","name":" \r\n[DAP] 80 Pagar gratificação por  encargo de curso e concurso - outras instituições","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":992.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"8b5fe2d8-1bc9-4f31-8cef-a87f9966cb6c","name":"Necessidade de gratificação para outras instituições","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Ata de banca, plano de atividades de curso ou concurso</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":134.0,"y":184.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"92060c48-bdb1-4adc-b044-e3fe000cd88c","name":"Abrir processo de gratificação de curso e/ou concurso ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":198.0,"y":163.0}],"radius":0.0,"height":72.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c7289619-bdd2-4552-8f8a-baaf2d408d57","name":"Incluir em  PDF o processo recebido da instituição em que o servidor da UFCSPA exerceu as atividades","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":314.0,"y":150.0}],"radius":0.0,"height":98.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bf00b9df-7558-4a28-ad1a-1044d0bc3afe","name":"Incluir documento 872 - Despacho Simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":474.0,"y":168.0}],"radius":0.0,"height":62.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9864576a-4e0f-4971-a57a-2e1791ad9f75","name":"Incluir documento  872 - Despacho Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":675.0,"y":586.0}],"radius":0.0,"height":68.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e7c5a02c-7653-4700-892b-159ed2fcd5ce","name":"Recurso disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":710.0,"y":332.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"8bca59b5-8071-4907-b7f3-2443cb8a628b","name":"Informar a Instituição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":685.0,"y":214.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d1dadbc-40b8-446a-ba55-3886e50b3443","name":"Aguardar instituição fazer as devidas correções","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":679.0,"y":92.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72b51842-cd46-4d5d-b394-48ab0a771559","name":"Registrar no Siapenet as horas trabalhadas para geração do pagamento na folha vigente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":843.0,"y":317.0}],"radius":0.0,"height":71.0,"width":137.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e60df6e4-47a0-4ea5-a255-273f6fc09ca6","name":"Dar ciência no processo e efetuar registros necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":417.0,"y":753.0}],"radius":0.0,"height":74.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5baebadc-d41c-40dc-87d9-53518c75f945","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":423.0,"y":933.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3b98465e-9ddc-40fa-9531-78451efb9cb3","name":"Pagamento realizado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":573.0,"y":948.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"6b0afced-97e6-4cc6-8a3f-4b2c2495a690","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":511.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"97a2b20f-efef-4616-9671-ed066ec36ffc","name":"Departamento de Orçamento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":531.0}],"radius":0.0,"height":155.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"edbd45fe-e548-405e-9082-f1a85f0cc639","name":"Departamento de Contabilidade e Finanças","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":686.0}],"radius":0.0,"height":173.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"15fbdc1d-c9f0-47fc-8030-7cf45797108a","name":"Divisão de Arquivo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":859.7}],"radius":0.0,"height":152.299988,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"a92a37ad-775c-4759-81bd-c978837d1fe8","containerName":"[DAP] 80 Pagar gratificação por  encargo de curso e concurso - outras instituições","isSubprocess":false,"elements":[{"id":"9f0662f9-f57e-436c-9675-2317ac116cb3","value":" \r\n[DAP] 80 Pagar gratificação por  encargo de curso e concurso - outras instituições"},{"id":"6b0afced-97e6-4cc6-8a3f-4b2c2495a690","value":"DAP"},{"id":"97a2b20f-efef-4616-9671-ed066ec36ffc","value":"Departamento de Orçamento"},{"id":"edbd45fe-e548-405e-9082-f1a85f0cc639","value":"Departamento de Contabilidade e Finanças"},{"id":"15fbdc1d-c9f0-47fc-8030-7cf45797108a","value":"Divisão de Arquivo"},{"id":"8b5fe2d8-1bc9-4f31-8cef-a87f9966cb6c","value":"Necessidade de gratificação para outras instituições"},{"id":"c7289619-bdd2-4552-8f8a-baaf2d408d57","value":"Incluir em  PDF o processo recebido da instituição em que o servidor da UFCSPA exerceu as atividades"},{"id":"bf00b9df-7558-4a28-ad1a-1044d0bc3afe","value":"Incluir documento 872 - Despacho Simples "},{"id":"72b51842-cd46-4d5d-b394-48ab0a771559","value":"Registrar no Siapenet as horas trabalhadas para geração do pagamento na folha vigente"},{"id":"e60df6e4-47a0-4ea5-a255-273f6fc09ca6","value":"Dar ciência no processo e efetuar registros necessários"},{"id":"5baebadc-d41c-40dc-87d9-53518c75f945","value":"Realizar tratamento arquivístico"},{"id":"3b98465e-9ddc-40fa-9531-78451efb9cb3","value":"Pagamento realizado"},{"id":"9864576a-4e0f-4971-a57a-2e1791ad9f75","value":"Incluir documento  872 - Despacho Simples"},{"id":"e7c5a02c-7653-4700-892b-159ed2fcd5ce","value":"Recurso disponível?"},{"id":"8bca59b5-8071-4907-b7f3-2443cb8a628b","value":"Informar a Instituição"},{"id":"92060c48-bdb1-4adc-b044-e3fe000cd88c","value":"Abrir processo de gratificação de curso e/ou concurso "},{"id":"1d1dadbc-40b8-446a-ba55-3886e50b3443","value":"Aguardar instituição fazer as devidas correções"},{"id":"2de8d31c-749d-487e-8ffc-acdce0301b16"},{"id":"51897012-7651-495e-9e47-d46f81b35500"},{"id":"d4a72744-123a-4207-9dab-e4eac463b550"},{"id":"3a9fae22-333d-4223-817d-68026c9d4d4a"},{"id":"e8583f4f-ea7a-4dd6-ab00-394a2a5733f6"},{"id":"dd257041-32a4-4c84-86cd-91a939d3483a"},{"id":"a7e1b1f3-49d7-4115-8076-e70f56057c78"},{"id":"2da18669-8968-482c-9981-408058973216"},{"id":"f4a930c9-a5cf-4319-80e7-cd3fc69fdfd3"},{"id":"70b4e0bb-2ef1-4237-a098-f8d1ced13588"}]}]}