Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DISIR] 12 Administrar Infraestrutura de Backup","publishDate":"02/09/2021 14:16:37","pages":[{"id":"5492c3e4-e60f-4047-aa81-52458187dc35","name":"[DISIR] 12 Administrar Infraestrutura de Backup","version":"1.0","author":"thiagom","image":"files\\diagrams\\DISIR]_12_Administrar_Infraestrutura_de_Backup.png","isSubprocessPage":false,"elements":[{"id":"50d868e4-f124-4c32-b52d-038a1697389b","name":"[DISIR] 12 Administrar Infraestrutura de Backup","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":349.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"90b04c28-b9fe-4d9d-baa7-39e0b90dd15f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":128.0,"y":70.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"ab38367a-bdf2-48e6-9fda-5a0649773bc1","name":"Identificar a necessidade de Backup de Servidor e Sistema","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":197.0,"y":43.5}],"radius":0.0,"height":85.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dfc8f76d-3417-4274-b259-7283551033c6","name":"Analisar a necessidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":197.0,"y":255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"65e565d4-a0ef-42b9-b032-51c611b76a7d","name":"Tem estrutura física e lógica  disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":357.0,"y":265.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"76adfb45-944b-4b5b-ad79-89efe1cc94d7","name":"A estrutura física e lógica garante disponibildade, integridade e segurança?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":516.0,"y":75.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"61c7f84f-88dc-4721-9556-76e68c4eb96c","name":"Backup local?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":643.0,"y":75.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2067c8f2-120e-40c7-8181-34ea76778520","name":"[DISIR] 04-02 Disponibilizar estrutura remota","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":618.0,"y":175.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DISIR/DISIR%2004%20Solicitar%20estrutura%20de%20Backup/#diagram/89846cc6-7c27-4036-929d-c35203c43c0e","type":"url"}},{"id":"885c2560-7be1-4ace-8ca0-3f953f00a767","name":"[DISIR] 12-01 Criar backup local","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":776.0,"y":65.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[DISIR] 12-01 Criar backup local - [DISIR] 12-01 Criar backup local","type":"url","pageRef":"25486590-8e78-42b0-b6a2-5724efa5a713","processPageRef":"4cfb5ca9-a8fa-4244-89bb-617f789535dd"}]},{"id":"8813b570-ec9c-4ecc-8b57-082ed06e3bc9","name":"Informar a chefia necessidade de expansão de estrutura física/lógica ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":478.5,"y":242.5}],"radius":0.0,"height":87.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b5d8ae4f-ee55-4c4c-8640-8c9c7b368e8c","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":917.0,"y":190.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"5cd68812-edd7-4018-b364-606ff211875c","name":"DISIR","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":349.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"25486590-8e78-42b0-b6a2-5724efa5a713","name":"[DISIR] 12-01 Criar backup local","version":"1.0","author":"thiagom","image":"files\\diagrams\\DISIR]_12_01_Criar_backup_local.png","isSubprocessPage":false,"elements":[{"id":"4cfb5ca9-a8fa-4244-89bb-617f789535dd","name":"[DISIR] 12-01 Criar backup local","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":252.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"0225824d-891a-4a93-9550-fd9fcb3c55c9","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":114.0,"y":60.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"0ca337b4-90c5-4ac0-b4a9-23134a3af035","name":"Selecionar o Storage","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":182.0,"y":39.0}],"radius":0.0,"height":72.0,"width":70.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c90dae61-b0b5-464e-ad5a-b22b267f30dd","name":"Selecionar o tamanho do HD","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":281.0,"y":45.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b9478f2c-44eb-49ea-a211-34de1c203b4e","name":"Atribuir a estrutura criada no servidor virtual ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":408.0,"y":30.0}],"radius":0.0,"height":90.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f7da6a7d-afc0-4338-b9e7-8f9bd3335549","name":"Instalar estrutura criada no servidor virtual ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":401.5,"y":170.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"59d335cd-9e98-4e4b-a110-5da720828dc4","name":"Configurar estrutura no servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":562.0,"y":170.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7d4c3dbb-f2fd-4cc8-929e-4fe313d42df8","name":"Fornecer acesso à estrutura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":562.0,"y":42.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9cceabd1-c017-472e-829f-4dd461e066b7","name":"Criar rotina de backup","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":692.0,"y":41.0}],"radius":0.0,"height":62.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0b6a32b6-37ac-4961-88f3-91bb5a151a56","name":"Testar restauração de backup","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":822.0,"y":42.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8c01f625-5737-468f-bd3c-44f8b8b761c7","name":"Restauração de backup ok?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":974.0,"y":52.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b9b1a8a1-b749-4913-a0a8-bd6e0fcbba9b","name":"Corrigir erros de backup","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":949.0,"y":156.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"45962f0b-d8d2-41cb-b78c-406b8ca69f1b","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1101.0,"y":57.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"5b974f87-b2bc-4b58-bc9c-0385db134435","name":"DISIR","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":252.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"25486590-8e78-42b0-b6a2-5724efa5a713","containerName":"[DISIR] 12-01 Criar backup local","isSubprocess":false,"elements":[{"id":"4cfb5ca9-a8fa-4244-89bb-617f789535dd","value":"[DISIR] 12-01 Criar backup local"},{"id":"5b974f87-b2bc-4b58-bc9c-0385db134435","value":"DISIR"},{"id":"45962f0b-d8d2-41cb-b78c-406b8ca69f1b","value":""},{"id":"f7da6a7d-afc0-4338-b9e7-8f9bd3335549","value":"Instalar estrutura criada no servidor virtual "},{"id":"b9478f2c-44eb-49ea-a211-34de1c203b4e","value":"Atribuir a estrutura criada no servidor virtual "},{"id":"9cceabd1-c017-472e-829f-4dd461e066b7","value":"Criar rotina de backup"},{"id":"0225824d-891a-4a93-9550-fd9fcb3c55c9","value":""},{"id":"7d4c3dbb-f2fd-4cc8-929e-4fe313d42df8","value":"Fornecer acesso à estrutura"},{"id":"59d335cd-9e98-4e4b-a110-5da720828dc4","value":"Configurar estrutura no servidor"},{"id":"0b6a32b6-37ac-4961-88f3-91bb5a151a56","value":"Testar restauração de backup"},{"id":"8c01f625-5737-468f-bd3c-44f8b8b761c7","value":"Restauração de backup ok?"},{"id":"b9b1a8a1-b749-4913-a0a8-bd6e0fcbba9b","value":"Corrigir erros de backup"},{"id":"0ca337b4-90c5-4ac0-b4a9-23134a3af035","value":"Selecionar o Storage"},{"id":"c90dae61-b0b5-464e-ad5a-b22b267f30dd","value":"Selecionar o tamanho do HD"},{"id":"a0daeeaa-9b7a-407b-99fe-b0a5aa255414"},{"id":"3628d9b2-28e3-409b-b531-5237bfbab532"}]},{"containerId":"5492c3e4-e60f-4047-aa81-52458187dc35","containerName":"[DISIR] 12 Administrar Infraestrutura de Backup","isSubprocess":false,"elements":[{"id":"50d868e4-f124-4c32-b52d-038a1697389b","value":"[DISIR] 12 Administrar Infraestrutura de Backup"},{"id":"5cd68812-edd7-4018-b364-606ff211875c","value":"DISIR"},{"id":"885c2560-7be1-4ace-8ca0-3f953f00a767","value":"[DISIR] 12-01 Criar backup local"},{"id":"b5d8ae4f-ee55-4c4c-8640-8c9c7b368e8c","value":""},{"id":"76adfb45-944b-4b5b-ad79-89efe1cc94d7","value":"A estrutura física e lógica garante disponibildade, integridade e segurança?"},{"id":"dfc8f76d-3417-4274-b259-7283551033c6","value":"Analisar a necessidade"},{"id":"65e565d4-a0ef-42b9-b032-51c611b76a7d","value":"Tem estrutura física e lógica  disponível?"},{"id":"61c7f84f-88dc-4721-9556-76e68c4eb96c","value":"Backup local?"},{"id":"90b04c28-b9fe-4d9d-baa7-39e0b90dd15f","value":""},{"id":"2067c8f2-120e-40c7-8181-34ea76778520","value":"[DISIR] 04-02 Disponibilizar estrutura remota"},{"id":"ab38367a-bdf2-48e6-9fda-5a0649773bc1","value":"Identificar a necessidade de Backup de Servidor e Sistema"},{"id":"8813b570-ec9c-4ecc-8b57-082ed06e3bc9","value":"Informar a chefia necessidade de expansão de estrutura física/lógica "},{"id":"b4d6e786-3dbc-4ba3-98c2-e63835cb6e1f"},{"id":"900794d5-1c96-4b5d-85f8-db8fb5a5c298"}]}]}