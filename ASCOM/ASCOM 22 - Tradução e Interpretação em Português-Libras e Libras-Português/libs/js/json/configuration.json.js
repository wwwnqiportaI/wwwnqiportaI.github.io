Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[ASCOM] 22 - Tradução e Interpretação em Português-Libras e Libras-Português","publishDate":"05/12/2018 10:57:53","pages":[{"id":"bc3b961b-ec62-438e-8aba-b618b80cfd0e","name":"[ASCOM] 22 - Tradução e Interpretação em Português-Libras e Libras-Português","version":"1.0","author":"vanizem","image":"files\\diagrams\\ASCOM]_22___Traducao_e_Interpretacao_em_Portugues_Libras_e_Libras_Portugues.png","isSubprocessPage":false,"elements":[{"id":"35365388-3eaf-474d-a804-59540d0d1ffd","name":"[ASCOM] 22 - Tradução e Interpretação em Português-Libras e Libras-Português","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1157.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d22abce2-4878-4876-becd-fd493a5078b7","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":134.0,"y":89.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"127ff41b-75df-4dc5-a3d9-4cc393ad21da","name":"Enviar solicitação da tradução ou interpretação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":207.0,"y":74.0}],"radius":0.0,"height":60.0,"width":139.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aee25783-039b-454a-98fc-7368b5f6c235","name":"Verificar disponibilidade de atendimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":215.0,"y":193.0}],"radius":0.0,"height":60.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"17a6a657-36c3-4e18-8b08-4b901c66c87d","name":"Há disponibilidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":292.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"dbfed6d2-b688-48ed-8550-42cf5fdc2952","name":"É possível  modificar as atividades concomitantes previamente agendada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":464.0,"y":292.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7764dc9d-7d3b-4c15-86e2-35a01c847998","name":"Reagendar demandas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":346.0,"y":405.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fbd42f5-afce-431e-aefd-f098a4837d7e","name":"Informar a impossibilidade de atendimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":561.0,"y":272.0}],"radius":0.0,"height":80.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5a6cf65-851e-438d-9067-75b9cb72d32a","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":415.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"É evento?","elementType":"SequenceFlow","properties":[]}]},{"id":"85749552-cb7f-4beb-8fc5-f43a705cbb99","name":"É evento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":528.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1e8443bd-a2d3-490b-86df-0f0101ee21c8","name":"É disciplina?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":649.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"221fde9f-023b-459e-bf7c-bb2dff273d7e","name":"É reunião do DEH ou COMGRAD?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":786.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"80e3c98e-e4a3-4b90-9b8c-3a4f6459b2df","name":"Há colisão com outras demandas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":427.0,"y":786.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"84e8ac3c-c654-437c-bec1-68313cc3378e","name":"Cancelar as outras demandas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":561.0,"y":846.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b9e6d0b3-8f86-4652-8998-cff6664c3fbe","name":"A gravação da janela em Libras será feita pela ASCOM?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":256.0,"y":918.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Confirmar o atendimento ","elementType":"SequenceFlow","properties":[]}]},{"id":"41afed7c-7908-4b87-84bd-395e74b43267","name":"[ASCOM] 19 - Registro de vídeo","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":231.0,"y":1052.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"68ad44ae-68d1-4305-a37e-607f67b3bf82","name":"O evento é superior a 1h?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":528.0,"y":528.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"78276327-64a9-49eb-b29f-249ddd812bc2","name":"Informar a necessidade de contratar mais TILS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":644.0,"y":444.0}],"radius":0.0,"height":72.0,"width":151.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f7d50c02-6274-49de-82d6-fd22603eac96","name":"Contratar TILS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":674.5,"y":79.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c542fa8f-8a76-4b8b-9763-1d717b5e042e","name":"Informar contratação de TILS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":803.0,"y":79.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"488f86be-c3fa-4de6-8fba-f0a4e3549c36","name":"Confirmar o atendimento ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":648.5,"y":578.0}],"radius":0.0,"height":60.0,"width":151.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdbc421c-dcc0-4fb9-a50c-567da3445845","name":"Solicitar o material a ser traduzido/interpretado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1004.0,"y":571.5}],"radius":0.0,"height":73.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2df80a40-4ed0-4196-a672-8a6af83bddf4","name":"Disponibilizar material para estudo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":990.0,"y":75.0}],"radius":0.0,"height":69.0,"width":162.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"34b45c37-4c12-4cce-8729-b1a98641e11a","name":"Realizar tradução e/ou interpretação em local e  data confirmados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1188.0,"y":575.0}],"radius":0.0,"height":66.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"662a3744-ac34-472d-883e-fe7ac697abff","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1377.0,"y":593.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"de6dc009-d1cd-4f72-94dd-4328838bbe1a","name":"Solicitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":149.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"97e29937-84d5-472b-a90c-62fce2f8c852","name":"Tradutora-intérprete de Libras","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":169.0}],"radius":0.0,"height":833.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"ddb1ac93-ce7e-4997-824a-0aa1856146b6","name":"Editor/produtor do vídeo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1002.0}],"radius":0.0,"height":175.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"bc3b961b-ec62-438e-8aba-b618b80cfd0e","containerName":"[ASCOM] 22 - Tradução e Interpretação em Português-Libras e Libras-Português","isSubprocess":false,"elements":[{"id":"35365388-3eaf-474d-a804-59540d0d1ffd","value":"[ASCOM] 22 - Tradução e Interpretação em Português-Libras e Libras-Português"},{"id":"de6dc009-d1cd-4f72-94dd-4328838bbe1a","value":"Solicitante"},{"id":"97e29937-84d5-472b-a90c-62fce2f8c852","value":"Tradutora-intérprete de Libras"},{"id":"ddb1ac93-ce7e-4997-824a-0aa1856146b6","value":"Editor/produtor do vídeo"},{"id":"d22abce2-4878-4876-becd-fd493a5078b7","value":""},{"id":"85749552-cb7f-4beb-8fc5-f43a705cbb99","value":"É evento?"},{"id":"6fbd42f5-afce-431e-aefd-f098a4837d7e","value":"Informar a impossibilidade de atendimento"},{"id":"68ad44ae-68d1-4305-a37e-607f67b3bf82","value":"O evento é superior a 1h?"},{"id":"78276327-64a9-49eb-b29f-249ddd812bc2","value":"Informar a necessidade de contratar mais TILS"},{"id":"488f86be-c3fa-4de6-8fba-f0a4e3549c36","value":"Confirmar o atendimento "},{"id":"127ff41b-75df-4dc5-a3d9-4cc393ad21da","value":"Enviar solicitação da tradução ou interpretação"},{"id":"f7d50c02-6274-49de-82d6-fd22603eac96","value":"Contratar TILS"},{"id":"c542fa8f-8a76-4b8b-9763-1d717b5e042e","value":"Informar contratação de TILS"},{"id":"aee25783-039b-454a-98fc-7368b5f6c235","value":"Verificar disponibilidade de atendimento"},{"id":"17a6a657-36c3-4e18-8b08-4b901c66c87d","value":"Há disponibilidade?"},{"id":"1e8443bd-a2d3-490b-86df-0f0101ee21c8","value":"É disciplina?"},{"id":"221fde9f-023b-459e-bf7c-bb2dff273d7e","value":"É reunião do DEH ou COMGRAD?"},{"id":"80e3c98e-e4a3-4b90-9b8c-3a4f6459b2df","value":"Há colisão com outras demandas?"},{"id":"b9e6d0b3-8f86-4652-8998-cff6664c3fbe","value":"A gravação da janela em Libras será feita pela ASCOM?"},{"id":"34b45c37-4c12-4cce-8729-b1a98641e11a","value":"Realizar tradução e/ou interpretação em local e  data confirmados"},{"id":"dbfed6d2-b688-48ed-8550-42cf5fdc2952","value":"É possível  modificar as atividades concomitantes previamente agendada?"},{"id":"7764dc9d-7d3b-4c15-86e2-35a01c847998","value":"Reagendar demandas"},{"id":"84e8ac3c-c654-437c-bec1-68313cc3378e","value":"Cancelar as outras demandas"},{"id":"2df80a40-4ed0-4196-a672-8a6af83bddf4","value":"Disponibilizar material para estudo"},{"id":"fdbc421c-dcc0-4fb9-a50c-567da3445845","value":"Solicitar o material a ser traduzido/interpretado"},{"id":"41afed7c-7908-4b87-84bd-395e74b43267","value":"[ASCOM] 19 - Registro de vídeo"},{"id":"662a3744-ac34-472d-883e-fe7ac697abff","value":""},{"id":"d5a6cf65-851e-438d-9067-75b9cb72d32a","value":""}]}]}