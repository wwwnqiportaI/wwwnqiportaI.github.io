Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[SECON] 16 Realizar sessão dos Conselhos Superiores","publishDate":"07/03/2021 20:28:44","pages":[{"id":"5af3fc45-d2bd-41b4-bc8a-651bc21ecc77","name":"[SECON] 16 Realizar sessão dos Conselhos Superiores","version":"1.0","author":"ariel","image":"files\\diagrams\\SECON]_16_Realizar_sessao_dos_Conselhos_Superiores.png","isSubprocessPage":false,"elements":[{"id":"560c8d2e-70f6-485a-82ac-817a4e9c8b70","name":"[SECON] 16 Realizar sessão dos Conselhos Superiores","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2669.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"971c714c-0ba1-4a0b-8a55-f88538db6ada","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":160.0,"y":109.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"58f52d23-6677-4070-9c5e-5f52c37bc730","name":"Encaminhar os processos da pauta aprovada para o Conselho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":256.0,"y":87.0}],"radius":0.0,"height":75.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"675ec247-f027-4841-b07b-2f35bdd660f5","name":"Abrir processo de sessão do Conselho Superior","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":636.5,"y":322.5}],"radius":0.0,"height":74.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8a6840e-4a8f-44ad-86bc-05a05927fb26","name":"Incluir documento 227 - Convocação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":479.0,"y":319.0}],"radius":0.0,"height":81.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"37e1691d-bf9f-4b34-a225-d09e77ad1fdb","name":"Incluir em PDF minuta da ata da sessão anterior","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":305.5,"y":323.5}],"radius":0.0,"height":72.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"de1ddbcc-054a-4fc7-b5ec-3687d4d2601a","name":"Incluir processos da sessão em bloco de reunião","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":309.5,"y":469.0}],"radius":0.0,"height":82.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"92f53f8c-bf67-4a38-9c97-13a354fc6380","name":"Liberar bloco de reunião para os conselheiros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":308.5,"y":602.0}],"radius":0.0,"height":66.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3901790e-edbb-4589-ba46-8fc026924225","name":"Enviar processo para os conselheiros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":305.0,"y":731.0}],"radius":0.0,"height":77.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"393cbd0e-69eb-4ff6-a9cc-c94c0c6b7c6b","name":"Analisar processos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":314.0,"y":1406.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82b6fde5-1800-4e6a-90de-d13342807ed1","name":"Justificar falta na sessão convocada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":339.0,"y":1579.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a6ad3e60-37ff-4dec-82da-b2b8608b5497","name":"Conselheiro é servidor da UFCSPA?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":552.0,"y":1579.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b5b6f357-b0b9-428f-9cc2-d2b73b552790","name":"Incluir documento 230 - Justificativa de falta sessão dos conselhos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":745.0,"y":1560.0}],"radius":0.0,"height":78.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06871747-418a-437c-bfe3-f2aa888374d5","name":"[SECON] 16-01 Justificar falta em sessão dos conselhos","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":527.0,"y":1709.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[SECON] 16-01 Justificar falta em sessão dos conselhos - [SECON] 16-01 Justificar falta em sessão dos conselhos","type":"text"}]},{"id":"59160eb8-4e0f-4ab1-a014-8ea92a7ee21d","name":"Registrar falta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":924.0,"y":927.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"69ae9726-cc3a-4e17-9bef-ccdc53b84173","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":552.0,"y":1918.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sugerir convidado para participar da sessão?","elementType":"SequenceFlow","properties":[]}]},{"id":"519b9539-c929-45ff-a3c5-bdb2bf09c99c","name":"Sugerir convidado para participar da sessão?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":552.0,"y":2044.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"bd392794-c87a-4595-8985-3ffd16a30ad2","name":"Conselheiro é servidor da UFCSPA?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":714.0,"y":2044.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a8f2683f-a4a9-4305-a1f1-7d794297a545","name":"Incluir documento 231 - Solicitação de convidado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":891.0,"y":2029.5}],"radius":0.0,"height":71.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9a9b6764-9c96-4718-a55a-cc30f2f3bed3","name":"[SECON] 16-02 Sugerir convidados para a sessão dos conselhos","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":689.0,"y":2188.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[SECON] 16-02 Sugerir convidados para a sessão dos conselhos - [SECON] 16-02 Sugerir convidados para a sessão dos conselhos","type":"text"}]},{"id":"0380c0f7-b9c0-490c-8a07-58f738b4f52a","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":714.0,"y":2343.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Conselheiro membro externo solicita vistas aos processos da sessão?","elementType":"SequenceFlow","properties":[]}]},{"id":"49cb1563-306c-45b9-bde3-00d484bcec45","name":"Conselheiro membro externo solicita vistas aos processos da sessão?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1132.0,"y":2279.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a10454f7-ac2a-406c-89f4-fe519f538038","name":"[DSG] 33 Solicitar vistas de processos administrativos","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1408.0,"y":2269.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DSG/DSG%2033%20Solicitar%20vistas%20de%20processos%20administrativos/#list","type":"url"}},{"id":"2ac49e78-60ac-4d8d-8034-aed07da7736f","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1132.0,"y":1263.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Houve indicação de convidados?","elementType":"SequenceFlow","properties":[]}]},{"id":"7b2b41a5-0f96-4a02-869e-ff608d12db43","name":"Houve indicação de convidados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1132.0,"y":1175.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"0e47db8f-3860-4673-a3d1-bfca705ba686","name":"Analisar lista de convidados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1252.0,"y":1165.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"db57115a-6a69-449f-a2e7-7abe377d6e63","name":"De acordo com os convidados indicados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1277.0,"y":1089.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"78affd42-ecf2-4384-ae51-5f33b78a4f1a","name":"Incluir convidados na lista de presença","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1247.0,"y":934.0}],"radius":0.0,"height":78.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1d1635f8-7fa6-4687-87ba-8a234993e297","name":"Enviar processo para o conselho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1414.0,"y":837.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fdae0ec5-dd87-4e64-916e-851ed933a285","name":"Organizar a realização da sessão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1077.0,"y":726.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a6131aa-9de3-4c9a-9ece-1516224f76e0","name":"Sessão será realizada de forma remota?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1102.0,"y":591.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"fd3bbda4-bd42-4c21-990f-887aabac37e3","name":"Incluir documento 228 - Lista de presença","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1210.0,"y":577.0}],"radius":0.0,"height":69.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"993e48b1-c40a-4dd5-826c-8695234447b1","name":"Providenciar terminal na sala no dia da sessão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1354.0,"y":577.0}],"radius":0.0,"height":69.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0d2abe90-e096-4c8f-a5b3-62c9a7371dc8","name":"Realizar sessão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1359.0,"y":469.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15fde062-2f15-4912-886b-61c6246f2455","name":"Realizar sessão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1077.0,"y":460.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8dc31923-b48a-4fd8-96c6-52755f801e50","name":"Incluir em PDF comprovante de presença na sessão remota","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1072.0,"y":348.5}],"radius":0.0,"height":67.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fda123d7-eec7-4586-988b-02b89a9ce62d","name":"Incluir resoluções nos processos da pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1356.5,"y":346.5}],"radius":0.0,"height":71.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0708da98-d807-47aa-80e0-c4f99e31a331","name":"Dar seguimento aos processos da pauta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1515.0,"y":346.5}],"radius":0.0,"height":71.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68f58718-0d2c-4706-b8f1-9484e28603ef","name":"Encerrar bloco de reunião","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1520.0,"y":467.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04ae0e66-60a0-4b2b-a214-20d65840b7d5","name":"Incluir documento 229 - Ata de sessão dos conselhos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1512.0,"y":589.0}],"radius":0.0,"height":76.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4607c0ec-fac9-44ae-baee-9f7c2bf73564","name":"Aguardar aprovação da ata na próxima sessão","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1550.0,"y":720.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"32dadc5e-0644-4288-924e-6c73377cb0a3","name":"Realizar correções na ata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1520.0,"y":829.0}],"radius":0.0,"height":67.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0b2d6034-3881-43e0-8d6d-3edb49f3e217","name":"Assinar ata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1520.0,"y":1127.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"41970dce-9ce3-42a1-b812-129d8acc154b","name":"Publicar ata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1658.0,"y":955.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bf17de22-73bd-4363-83a3-e074bbcafe6a","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1658.0,"y":2527.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9f311805-ec1a-4d0b-a00f-586720f70a91","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1688.0,"y":2624.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e42ab06f-d40e-4ec2-b72a-8b75e730f63d","name":"SECON","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":250.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c8566f85-fe7d-4165-96bb-6ce409ec0695","name":"Secretário dos Conselhos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":270.0}],"radius":0.0,"height":785.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"205fd99d-fc7c-40a3-9c94-cc0a92b4fc02","name":"Presidente do CONSUN ou CONSEPE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1055.0}],"radius":0.0,"height":296.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2708c40e-1271-4686-aeac-4f75f336712e","name":"Conselheiro do CONSUN ou CONSEPE","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1351.0}],"radius":0.0,"height":1138.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"636f6ff6-4e5c-46f8-a2d4-f2a78fbd6eb4","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2489.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"5af3fc45-d2bd-41b4-bc8a-651bc21ecc77","containerName":"[SECON] 16 Realizar sessão dos Conselhos Superiores","isSubprocess":false,"elements":[{"id":"560c8d2e-70f6-485a-82ac-817a4e9c8b70","value":"[SECON] 16 Realizar sessão dos Conselhos Superiores"},{"id":"e42ab06f-d40e-4ec2-b72a-8b75e730f63d","value":"SECON"},{"id":"c8566f85-fe7d-4165-96bb-6ce409ec0695","value":"Secretário dos Conselhos"},{"id":"205fd99d-fc7c-40a3-9c94-cc0a92b4fc02","value":"Presidente do CONSUN ou CONSEPE"},{"id":"2708c40e-1271-4686-aeac-4f75f336712e","value":"Conselheiro do CONSUN ou CONSEPE"},{"id":"636f6ff6-4e5c-46f8-a2d4-f2a78fbd6eb4","value":"DIARQ"},{"id":"971c714c-0ba1-4a0b-8a55-f88538db6ada","value":""},{"id":"58f52d23-6677-4070-9c5e-5f52c37bc730","value":"Encaminhar os processos da pauta aprovada para o Conselho"},{"id":"675ec247-f027-4841-b07b-2f35bdd660f5","value":"Abrir processo de sessão do Conselho Superior"},{"id":"f8a6840e-4a8f-44ad-86bc-05a05927fb26","value":"Incluir documento 227 - Convocação"},{"id":"37e1691d-bf9f-4b34-a225-d09e77ad1fdb","value":"Incluir em PDF minuta da ata da sessão anterior"},{"id":"b5b6f357-b0b9-428f-9cc2-d2b73b552790","value":"Incluir documento 230 - Justificativa de falta sessão dos conselhos"},{"id":"a8f2683f-a4a9-4305-a1f1-7d794297a545","value":"Incluir documento 231 - Solicitação de convidado"},{"id":"9f311805-ec1a-4d0b-a00f-586720f70a91","value":""},{"id":"bf17de22-73bd-4363-83a3-e074bbcafe6a","value":"Realizar tratamento arquivístico"},{"id":"82b6fde5-1800-4e6a-90de-d13342807ed1","value":"Justificar falta na sessão convocada?"},{"id":"0a6131aa-9de3-4c9a-9ece-1516224f76e0","value":"Sessão será realizada de forma remota?"},{"id":"8dc31923-b48a-4fd8-96c6-52755f801e50","value":"Incluir em PDF comprovante de presença na sessão remota"},{"id":"fd3bbda4-bd42-4c21-990f-887aabac37e3","value":"Incluir documento 228 - Lista de presença"},{"id":"fda123d7-eec7-4586-988b-02b89a9ce62d","value":"Incluir resoluções nos processos da pauta"},{"id":"0708da98-d807-47aa-80e0-c4f99e31a331","value":"Dar seguimento aos processos da pauta"},{"id":"04ae0e66-60a0-4b2b-a214-20d65840b7d5","value":"Incluir documento 229 - Ata de sessão dos conselhos"},{"id":"4607c0ec-fac9-44ae-baee-9f7c2bf73564","value":"Aguardar aprovação da ata na próxima sessão"},{"id":"32dadc5e-0644-4288-924e-6c73377cb0a3","value":"Realizar correções na ata"},{"id":"41970dce-9ce3-42a1-b812-129d8acc154b","value":"Publicar ata"},{"id":"3901790e-edbb-4589-ba46-8fc026924225","value":"Enviar processo para os conselheiros"},{"id":"fdae0ec5-dd87-4e64-916e-851ed933a285","value":"Organizar a realização da sessão"},{"id":"1d1635f8-7fa6-4687-87ba-8a234993e297","value":"Enviar processo para o conselho"},{"id":"a6ad3e60-37ff-4dec-82da-b2b8608b5497","value":"Conselheiro é servidor da UFCSPA?"},{"id":"06871747-418a-437c-bfe3-f2aa888374d5","value":"[SECON] 16-01 Justificar falta em sessão dos conselhos"},{"id":"bd392794-c87a-4595-8985-3ffd16a30ad2","value":"Conselheiro é servidor da UFCSPA?"},{"id":"9a9b6764-9c96-4718-a55a-cc30f2f3bed3","value":"[SECON] 16-02 Sugerir convidados para a sessão dos conselhos"},{"id":"a10454f7-ac2a-406c-89f4-fe519f538038","value":"[DSG] 33 Solicitar vistas de processos administrativos"},{"id":"519b9539-c929-45ff-a3c5-bdb2bf09c99c","value":"Sugerir convidado para participar da sessão?"},{"id":"49cb1563-306c-45b9-bde3-00d484bcec45","value":"Conselheiro membro externo solicita vistas aos processos da sessão?"},{"id":"0380c0f7-b9c0-490c-8a07-58f738b4f52a","value":""},{"id":"393cbd0e-69eb-4ff6-a9cc-c94c0c6b7c6b","value":"Analisar processos"},{"id":"993e48b1-c40a-4dd5-826c-8695234447b1","value":"Providenciar terminal na sala no dia da sessão"},{"id":"0b2d6034-3881-43e0-8d6d-3edb49f3e217","value":"Assinar ata"},{"id":"de1ddbcc-054a-4fc7-b5ec-3687d4d2601a","value":"Incluir processos da sessão em bloco de reunião"},{"id":"92f53f8c-bf67-4a38-9c97-13a354fc6380","value":"Liberar bloco de reunião para os conselheiros"},{"id":"68f58718-0d2c-4706-b8f1-9484e28603ef","value":"Encerrar bloco de reunião"},{"id":"59160eb8-4e0f-4ab1-a014-8ea92a7ee21d","value":"Registrar falta"},{"id":"69ae9726-cc3a-4e17-9bef-ccdc53b84173","value":""},{"id":"0d2abe90-e096-4c8f-a5b3-62c9a7371dc8","value":"Realizar sessão"},{"id":"2ac49e78-60ac-4d8d-8034-aed07da7736f","value":""},{"id":"7b2b41a5-0f96-4a02-869e-ff608d12db43","value":"Houve indicação de convidados?"},{"id":"0e47db8f-3860-4673-a3d1-bfca705ba686","value":"Analisar lista de convidados"},{"id":"db57115a-6a69-449f-a2e7-7abe377d6e63","value":"De acordo com os convidados indicados?"},{"id":"78affd42-ecf2-4384-ae51-5f33b78a4f1a","value":"Incluir convidados na lista de presença"},{"id":"15fde062-2f15-4912-886b-61c6246f2455","value":"Realizar sessão"},{"id":"562c4bbf-ada0-4cf8-8bee-c7abf3dcb565"},{"id":"98280237-e759-4a4d-a57d-32e6af85eae0"},{"id":"d6c831ea-8b3b-4ca9-899a-ca07b258044b"},{"id":"a04f7cf4-5915-4e83-b3b8-5e575a949b46"},{"id":"d941d0c0-d908-470a-821a-68d1b36d96cb"},{"id":"b14829e0-f9b7-48ba-bac3-a7dccdbba4b4"},{"id":"617478a8-b0cc-40ca-acc6-a7da9ec7ce66"},{"id":"e40a3188-cabe-4b11-b27e-708603efc2c7"},{"id":"de944b7d-5c38-48dc-9bab-4f8cf6d19e6d"},{"id":"ed1a9200-9310-4f51-a3b7-9e766552f27d"},{"id":"b796b65d-5330-44cd-96d9-dd1037b00439"},{"id":"ef40f374-2b4f-48fb-b9f9-bcea85d93b25"},{"id":"d042aa13-d9ed-4d76-9330-0e7d1650b9cc"},{"id":"3b2338d9-d0b2-4b05-8c29-cca8cca2bd6c"},{"id":"4d63043a-c7d2-4f7e-b6e3-ad0ec8780e0e"},{"id":"d0a958c1-21ec-4796-a9c9-e3abcc605b95"},{"id":"54e4906e-6b3b-426a-aa78-4ec63fddd972"},{"id":"2104601e-aa86-47c0-ad15-9e835dad01ea"},{"id":"66983671-4300-41f3-a704-68d353d4c430"},{"id":"d6a12c8b-2cbb-4e0c-b6cc-fb6b4f8d4bd7"},{"id":"3b9ed7ef-a2dd-4dff-ac7a-a795e8020d91"},{"id":"9d697bff-6c45-492d-862d-2430fd750630"},{"id":"82c70c20-46d8-4422-8085-3fa953dc4a80"},{"id":"edc55c93-9155-4bd9-9f0b-f0c3da1550b8"},{"id":"377b83f1-b4ea-4a72-b29e-33819e717356"},{"id":"23818fca-a16c-4cda-9e44-6b6d4d977c4c"},{"id":"a13a0e55-2d70-4fc7-8b38-473dfb841106"}]}]}