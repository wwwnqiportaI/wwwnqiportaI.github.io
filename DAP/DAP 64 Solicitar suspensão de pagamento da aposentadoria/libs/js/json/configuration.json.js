Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 64 Solicitar suspensão de pagamento da aposentadoria","publishDate":"03/08/2022 11:57:59","pages":[{"id":"e492617c-b53b-480d-9e83-20fe3cfdf5a2","name":"[DAP] 64 Solicitar suspensão de pagamento da aposentadoria","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_64_Solicitar_suspensao_de_pagamento_da_aposentadoria.png","isSubprocessPage":false,"elements":[{"id":"82829a4d-473b-4fde-bd7d-44a922fbf30c","name":"[DAP] 64 Solicitar suspensão de pagamento da aposentadoria","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1349.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c679394d-1fba-4cdb-b039-cb5331849990","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Entrada: Documentos do SIAPE.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":150.0,"y":61.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"45e95e2b-0f2e-4019-9b14-087fdbdeed3a","name":"Abrir processo  de suspensão de pagamento de aposentadoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":232.0,"y":40.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bb25b52c-3eda-466a-9450-4378f771f63d","name":"Incluir em PDF  documentos comprobatórios do SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":438.0,"y":39.0}],"radius":0.0,"height":74.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bdbdb27d-7c28-49fc-8044-b28dcf05ea0a","name":"Incluir em PDF Aviso de Recebimento (AR) da notificação ao interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":427.0,"y":148.0}],"radius":0.0,"height":73.0,"width":127.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d6ff2674-a727-4338-a8c5-0fac35087173","name":"Publicar no DOU edital de suspensão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":445.5,"y":273.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"048a4931-ae4a-49ed-b4b6-e7cdfc2570c7","name":"Incluir em PDF cópia  da publicação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":441.0,"y":374.0}],"radius":0.0,"height":63.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3bcbbc11-b2e7-4ac1-b942-8b8885ea9202","name":"Aguardar o comparecimento do interessado no DAP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":437.5,"y":493.0}],"radius":0.0,"height":77.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1744fcdc-35ef-425c-a6e2-41874746cf7e","name":"Interessado compareceu ao DAP?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":470.5,"y":1108.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1e62f964-d155-4760-b366-5098d4c5e9a0","name":"Comparecer ao DAP com carteira de identidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":552.0,"y":1095.0}],"radius":0.0,"height":67.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"49a7daeb-df34-44ab-9f21-bcd12c307e5f","name":"Preencher formulário de recadastramento  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":729.0,"y":1098.0}],"radius":0.0,"height":61.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13684aac-20bc-429c-8154-2ba3f942a308","name":"Digitalizar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":732.0,"y":627.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dcefa1ce-a887-4ef7-99cd-2865fb911df4","name":"Incluir em PDF documentos digitalizados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":862.0,"y":627.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"824339b2-b9b9-4ca6-b2f3-3f8a0d089020","name":"Publicar no DOU edital de recadastramento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1015.0,"y":627.000061}],"radius":0.0,"height":61.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"30f2e6cd-6f0f-43ed-9809-0cda0fc8e383","name":"Incluir em PDF  cópia da publicação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1173.0,"y":627.0}],"radius":0.0,"height":61.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"779d3bda-01ce-457a-b735-5c610aa32798","name":"Registrar no SiapeNET","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1176.0,"y":731.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2faa12c2-44b6-4eb6-9db9-4d6d5925d0c0","name":"Incluir  pagamentos atrasados no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1174.50024,"y":849.0}],"radius":0.0,"height":61.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"539ba411-52db-4c18-becc-0855d70d73ed","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1167.0,"y":950.0}],"radius":0.0,"height":61.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9db5545c-0b8f-47d8-9381-301efd5fe6a9","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":307.0,"y":903.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"033301cd-97f9-4ac3-bc93-395d5e852a1d","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1177.0,"y":1254.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"5ae42caf-4228-4f84-96f2-5b5f1b42d16f","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1355.0,"y":1269.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"fae3a9a6-32c4-450d-ac54-725be211d799","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":1005.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6cb8a7be-e87c-4ca3-87eb-2cf393bc8f0d","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1025.0}],"radius":0.0,"height":183.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7f523f9f-fcc8-4094-a393-24901d01f3c8","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1208.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"e492617c-b53b-480d-9e83-20fe3cfdf5a2","containerName":"[DAP] 64 Solicitar suspensão de pagamento da aposentadoria","isSubprocess":false,"elements":[{"id":"82829a4d-473b-4fde-bd7d-44a922fbf30c","value":"[DAP] 64 Solicitar suspensão de pagamento da aposentadoria"},{"id":"fae3a9a6-32c4-450d-ac54-725be211d799","value":"DAP"},{"id":"6cb8a7be-e87c-4ca3-87eb-2cf393bc8f0d","value":"Interessado"},{"id":"7f523f9f-fcc8-4094-a393-24901d01f3c8","value":"DIARQ"},{"id":"c679394d-1fba-4cdb-b039-cb5331849990","value":""},{"id":"45e95e2b-0f2e-4019-9b14-087fdbdeed3a","value":"Abrir processo  de suspensão de pagamento de aposentadoria"},{"id":"bb25b52c-3eda-466a-9450-4378f771f63d","value":"Incluir em PDF  documentos comprobatórios do SIAPE"},{"id":"bdbdb27d-7c28-49fc-8044-b28dcf05ea0a","value":"Incluir em PDF Aviso de Recebimento (AR) da notificação ao interessado"},{"id":"d6ff2674-a727-4338-a8c5-0fac35087173","value":"Publicar no DOU edital de suspensão"},{"id":"048a4931-ae4a-49ed-b4b6-e7cdfc2570c7","value":"Incluir em PDF cópia  da publicação no DOU"},{"id":"3bcbbc11-b2e7-4ac1-b942-8b8885ea9202","value":"Aguardar o comparecimento do interessado no DAP"},{"id":"1e62f964-d155-4760-b366-5098d4c5e9a0","value":"Comparecer ao DAP com carteira de identidade"},{"id":"49a7daeb-df34-44ab-9f21-bcd12c307e5f","value":"Preencher formulário de recadastramento  "},{"id":"824339b2-b9b9-4ca6-b2f3-3f8a0d089020","value":"Publicar no DOU edital de recadastramento"},{"id":"30f2e6cd-6f0f-43ed-9809-0cda0fc8e383","value":"Incluir em PDF  cópia da publicação no DOU"},{"id":"13684aac-20bc-429c-8154-2ba3f942a308","value":"Digitalizar documentos"},{"id":"dcefa1ce-a887-4ef7-99cd-2865fb911df4","value":"Incluir em PDF documentos digitalizados"},{"id":"779d3bda-01ce-457a-b735-5c610aa32798","value":"Registrar no SiapeNET"},{"id":"2faa12c2-44b6-4eb6-9db9-4d6d5925d0c0","value":"Incluir  pagamentos atrasados no SIAPE"},{"id":"5ae42caf-4228-4f84-96f2-5b5f1b42d16f","value":""},{"id":"1744fcdc-35ef-425c-a6e2-41874746cf7e","value":"Interessado compareceu ao DAP?"},{"id":"9db5545c-0b8f-47d8-9381-301efd5fe6a9","value":"Incluir documento 860 - Despacho"},{"id":"033301cd-97f9-4ac3-bc93-395d5e852a1d","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"539ba411-52db-4c18-becc-0855d70d73ed","value":"Incluir documento 872 - Despacho simples"},{"id":"004db8a8-71be-41d1-94c7-19822a80ec42"},{"id":"a3607b13-47d7-4dfb-b196-64949e558199"},{"id":"ab389f67-0b3f-40fc-9c90-ae74e46bf55b"},{"id":"618f1826-da07-45fc-8001-0742c148731b"},{"id":"da2163d4-aa96-46b2-88f5-68741928ebf0"},{"id":"dd6de696-8856-4dfe-91ae-2f273eff9e2d"},{"id":"52a290eb-202e-4e1d-8a09-8efde1b19b7e"},{"id":"7c4f8810-1eeb-4835-8099-5fd2cd46cd3b"},{"id":"f2abc29f-ea0c-471b-94b6-fa2111d18050"},{"id":"6a4387a6-73d9-49f9-b482-367c6dc49e95"},{"id":"028e86d2-b6b2-45b8-8835-2f28d87e2aad"},{"id":"32bfe792-7277-4939-9f37-057138f153c0"},{"id":"1df77ad6-c818-448d-939b-2bdf53789ac1"},{"id":"1a0ccbc8-73a1-4cce-ad45-7e8578668aab"},{"id":"e6b38143-3082-48f9-9674-eae320fad38f"},{"id":"5d072b3d-64c0-4c4f-8909-16acf5dfc3c6"},{"id":"c04b0faa-5cc9-45da-a20e-d85c999d6203"}]}]}