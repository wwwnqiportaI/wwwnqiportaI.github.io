Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NQI] 11 Prestar suporte ao mapeamento e à análise de processos","publishDate":"11/08/2022 14:56:03","pages":[{"id":"13ce5581-00ad-44d4-886e-11871532b9d0","name":"[NQI] 11 Prestar suporte ao mapeamento e à análise de processos","version":"1.0","author":"julianash","image":"files\\diagrams\\NQI]_11_Prestar_suporte_ao_mapeamento_e_a_analise_de_processos.png","isSubprocessPage":false,"elements":[{"id":"e970e56e-5caa-41cc-9f72-62eb051e2441","name":"[NQI] 11 Prestar suporte ao mapeamento e à análise de processos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":761.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"de3e6dac-f972-42e2-811b-7d73c1f68245","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":135.0,"y":100.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"50f28dbf-d2b1-4a6f-9d4a-f0c7d4315870","name":"Analisar a natureza da necessidade de suporte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":224.0,"y":82.5}],"radius":0.0,"height":67.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b59da92e-15d1-4036-bc67-35f616fc8f1a","name":"É possível prestar o suporte por e-mail?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":376.0,"y":95.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ca675e5f-c748-4062-aee4-3386b2b6eab0","name":"Prestar o suporte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":351.0,"y":527.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"604921bf-1580-48bd-a539-d398afd1ae55","name":"Há outras necessidades de suporte?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":376.0,"y":669.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"d6c2f8c8-0a34-4f6b-a495-3ffe523a9aec","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DAS: Suporte realizado.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":506.0,"y":674.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cf757b4a-0ae1-43df-b0a1-a2223edff6fa","name":"Verificar  a complexidade da necessidade de suporte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":483.0,"y":80.0}],"radius":0.0,"height":70.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f773356-1f3e-49e7-9f4d-5f3e0305b839","name":"O suporte pode ser prestado por apenas um membro do NQI?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":656.499939,"y":95.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9eccc4bd-0679-42af-b329-aa0cc444b521","name":"Consultar a sua disponibilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":631.499939,"y":192.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74d11475-89a0-480c-a134-af0907696b07","name":"Membro do NQI tem disponibilidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":656.5,"y":392.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"da674870-a261-43f7-bda2-6d84b22236ac","name":"Buscar outra alternativa de data ou passar a demanda a outro membro do NQI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":449.0,"y":370.5}],"radius":0.0,"height":85.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e036e130-d6f6-42d5-8161-144d67f69149","name":"É necessário discutir sobre a necessidade de suporte em reunião da equipe?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":951.0,"y":213.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1146db94-3f46-446f-8219-6e0ecafde5c6","name":"Documentar a necessidade de suporte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1148.0,"y":203.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3137ebc3-d892-4063-bf6a-fb3d883e47b4","name":"[NQI] 08 Realizar reuniões semanais","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1148.0,"y":370.3}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/NQI/NQI%2008%20Realizar%20reunioes%20semanais/#list","type":"url"}},{"id":"cc54bfad-28cb-4e91-bef9-35d6852be020","name":"É necessário realizar visita à unidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":951.0,"y":537.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"78637ae9-ce4d-4948-a6ad-4e6555e21ca3","name":"[NQI] 07 Planejar e realizar visitas às unidades da UFCSPA","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":926.0,"y":684.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/NQI/NQI%2007%20Planejar%20e%20realizar%20visitas%20%C3%A0s%20unidades%20da%20UFCSPA/#list","type":"url"}},{"id":"d300770c-fc0a-464d-aa77-920036964ed5","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":761.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"77e722ec-415f-4bac-ae5e-7839173d9cd5","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":951.0,"y":392.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"É necessário realizar visita à unidade?","elementType":"SequenceFlow","properties":[]}]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"13ce5581-00ad-44d4-886e-11871532b9d0","containerName":"[NQI] 11 Prestar suporte ao mapeamento e à análise de processos","isSubprocess":false,"elements":[{"id":"e970e56e-5caa-41cc-9f72-62eb051e2441","value":"[NQI] 11 Prestar suporte ao mapeamento e à análise de processos"},{"id":"d300770c-fc0a-464d-aa77-920036964ed5","value":"NQI"},{"id":"de3e6dac-f972-42e2-811b-7d73c1f68245","value":""},{"id":"50f28dbf-d2b1-4a6f-9d4a-f0c7d4315870","value":"Analisar a natureza da necessidade de suporte"},{"id":"b59da92e-15d1-4036-bc67-35f616fc8f1a","value":"É possível prestar o suporte por e-mail?"},{"id":"ca675e5f-c748-4062-aee4-3386b2b6eab0","value":"Prestar o suporte"},{"id":"604921bf-1580-48bd-a539-d398afd1ae55","value":"Há outras necessidades de suporte?"},{"id":"d6c2f8c8-0a34-4f6b-a495-3ffe523a9aec","value":""},{"id":"cf757b4a-0ae1-43df-b0a1-a2223edff6fa","value":"Verificar  a complexidade da necessidade de suporte"},{"id":"1f773356-1f3e-49e7-9f4d-5f3e0305b839","value":"O suporte pode ser prestado por apenas um membro do NQI?"},{"id":"9eccc4bd-0679-42af-b329-aa0cc444b521","value":"Consultar a sua disponibilidade"},{"id":"74d11475-89a0-480c-a134-af0907696b07","value":"Membro do NQI tem disponibilidade?"},{"id":"da674870-a261-43f7-bda2-6d84b22236ac","value":"Buscar outra alternativa de data ou passar a demanda a outro membro do NQI"},{"id":"e036e130-d6f6-42d5-8161-144d67f69149","value":"É necessário discutir sobre a necessidade de suporte em reunião da equipe?"},{"id":"1146db94-3f46-446f-8219-6e0ecafde5c6","value":"Documentar a necessidade de suporte"},{"id":"cc54bfad-28cb-4e91-bef9-35d6852be020","value":"É necessário realizar visita à unidade?"},{"id":"78637ae9-ce4d-4948-a6ad-4e6555e21ca3","value":"[NQI] 07 Planejar e realizar visitas às unidades da UFCSPA"},{"id":"3137ebc3-d892-4063-bf6a-fb3d883e47b4","value":"[NQI] 08 Realizar reuniões semanais"},{"id":"77e722ec-415f-4bac-ae5e-7839173d9cd5","value":""},{"id":"26e4146b-580c-496f-b891-e66f8cb83f5a"},{"id":"c5c00b7e-7c23-45de-9b5e-7b0bb6d58d0f"},{"id":"b512e21c-2b36-4a16-8878-e73150ca5d1f"},{"id":"f79b00af-1ebe-4050-b1de-c64419b068d8"}]}]}