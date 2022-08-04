Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 84 Contratar estagiários administrativos","publishDate":"03/08/2022 14:02:19","pages":[{"id":"3f4b2116-17c6-4197-b56a-10193387bfd2","name":"[DAP] 84 Contratar estagiários administrativos","version":"1.0","author":"alinebrancher","image":"files\\diagrams\\DAP]_84_Contratar_estagiarios_administrativos.png","isSubprocessPage":false,"elements":[{"id":"eab0981b-6b23-4b82-91ba-ac8ed82387e4","name":"[DAP] 84 Contratar estagiários administrativos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1172.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"da5893db-f70c-43f5-a824-257f9d2dc4ce","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":129.0,"y":104.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"f1aad0ac-6eab-4368-a9bc-a01679ed97c8","name":"Abrir processo de solicitação para contratar estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":192.0,"y":85.5}],"radius":0.0,"height":69.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72a1bc10-5f1d-4ceb-ab74-6bc77f741212","name":"Incluir documento 882 - Formulário de solicitação de estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":315.0,"y":83.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a589ce56-ca1b-47c9-9baa-736527c5591d","name":"Nova vaga?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":347.5,"y":186.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"08bf8c06-7fb3-4f2e-8ecc-54386eddeeaf","name":"Incluir documento  914 - Formulário de justificativa para necessidade de estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":300.0,"y":297.0}],"radius":0.0,"height":83.0,"width":134.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4489954a-fdc5-46fb-8074-483eae56cf90","name":"Verificar lista de espera","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":322.0,"y":434.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d749a5d7-b670-4b08-bb5b-4083ef7ff11e","name":"Incuir documento 872 - Despacho Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":317.0,"y":530.0}],"radius":0.0,"height":60.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"244578de-bbcd-400b-aa18-cde0345da210","name":"Vaga disponível?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":347.5,"y":633.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9ce01693-7d6e-4ef3-928f-9ea1384698e3","name":"Incluir na lista de espera a necessidade de estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":196.0,"y":617.0}],"radius":0.0,"height":72.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8bbbff32-9265-4a7d-a13f-1b47626deac1","name":"Comunicar chefia imediata","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":198.0,"y":715.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a8c86eb8-900b-492e-a236-be1a939ec348","name":"Aguardar vaga disponível ","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":228.0,"y":840.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"78b0f9c7-0162-4c73-a279-996c74a27ec9","name":"Abrir vaga junto ao CIEE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":435.0,"y":623.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"52d8c4e2-aae1-4691-87ca-a33f8024dc5a","name":"Enviar solicitação com dados para contratação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":546.5001,"y":622.0}],"radius":0.0,"height":62.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"47f52b75-d1b6-46db-b9e4-283812d3a6e8","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":543.0,"y":470.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d2a8812-df53-4151-9181-fe60c6624399","name":"Guardar processo até a escolha do estagiário","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":726.0,"y":168.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"444d30ca-713d-4883-b413-a42c5cd7f669","name":"Incluir documento 912 - Formulário de seleção de estagiário ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":689.0,"y":288.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4b18fa61-0ae8-41cb-8382-e30277ec81a8","name":"Fazer carta de aprovação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":696.0,"y":633.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9cf412b2-3220-4e79-984d-8000744580ab","name":"Enviar documento 912 e carta de aprovação para CIEE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":811.0,"y":632.0}],"radius":0.0,"height":62.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"37b3bef4-a522-49a7-901c-d537aedd8f91","name":"Entrar em contato com estagiário solicitando entrega de documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":969.0,"y":631.0}],"radius":0.0,"height":64.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"86d8d7ce-1868-4176-a563-caf37fb8ccf1","name":"Aguardar entrega de documentos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1157.0,"y":648.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"dd090a9f-e676-4b5c-b6c7-420133b11024","name":"Incluir em PDF contrato e documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1127.0,"y":698.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8390932-8513-4208-a23b-98ac0ed4076e","name":"Registrar contratono SIAPE ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1127.0,"y":793.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"97695f40-73cd-4cce-89c2-94e963b8bc48","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1121.0,"y":888.0}],"radius":0.0,"height":62.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"88d40dba-6fab-48ae-9673-a26e921912f7","name":"Aguardar até 30 dias antes do término do contrato","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1462.0,"y":323.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"0e43781a-10ff-4f2c-86cb-a0fe8de9d91d","name":"Interesse em renovar estágio?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1457.0,"y":222.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7db998dc-bd96-4401-b0b6-4227a37afc7c","name":"Estágio pode ser renovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1273.0,"y":222.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"cbb8fb60-05a7-4a34-ae1a-6d0dd4bb4149","name":"Incluir documento 911 - Formulário de  renovação de estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1022.0,"y":206.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2066988f-0193-4f7b-a367-f566dd43191c","name":"Renovar contrato pelo site do CIEE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":863.0,"y":457.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"480fcf6a-a4e8-4a3c-9be4-5dc4a2e7043d","name":"Enviar documento 911 e documento de renovação para CIEE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":987.0,"y":454.0}],"radius":0.0,"height":67.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cc8f0f2a-1100-4fe9-bcbb-efb2d2106787","name":"Inclui em PDF documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1127.0,"y":457.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"df9ecd46-500e-4b6e-bfd9-7e1e32fb6e53","name":"Aguardar entrega de termo aditivo","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1251.0,"y":472.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"1b37411b-f3c5-4e44-b256-296cf693d42a","name":"Incluir em PDF termo aditivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1313.0,"y":457.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f9f444c-5050-479e-a930-dbb49e648c10","name":"Incluir documento  889 - Formulário de desligamento de estagiário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1552.0,"y":206.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"65994f8a-6a2d-4a17-9619-0b6f6f0cbf71","name":"Rescindir contrato pelo site do CIEE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1559.0,"y":513.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a18d623e-7ec0-4598-83bf-293bf45dafce","name":"Incluir em PDF rescisão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1559.0,"y":629.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0e9f62ae-9559-421f-af58-1e03ba035f0b","name":"Registrar rescisão no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1559.0,"y":793.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"59af45a8-0b6d-45a5-be84-8a6a15d525fd","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1551.5,"y":901.0}],"radius":0.0,"height":60.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"afcb6ab5-a8d0-4cf9-aaab-90c7f6a9809f","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1559.0,"y":1081.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"785c8bfd-b12f-4f41-b851-2dbe0a0bf1c5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1687.0,"y":1096.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4d9cf001-b3e6-485f-b744-949d8d839f25","name":"Chefia imediata do estagiário","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":392.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"958c1917-1db3-4e4c-a663-10d356031af6","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":412.0}],"radius":0.0,"height":634.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a0d4e988-a52e-492a-89da-0cfc0dae3f8f","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1046.0}],"radius":0.0,"height":146.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"3f4b2116-17c6-4197-b56a-10193387bfd2","containerName":"[DAP] 84 Contratar estagiários administrativos","isSubprocess":false,"elements":[{"id":"eab0981b-6b23-4b82-91ba-ac8ed82387e4","value":"[DAP] 84 Contratar estagiários administrativos"},{"id":"4d9cf001-b3e6-485f-b744-949d8d839f25","value":"Chefia imediata do estagiário"},{"id":"958c1917-1db3-4e4c-a663-10d356031af6","value":"DAP"},{"id":"a0d4e988-a52e-492a-89da-0cfc0dae3f8f","value":"DIARQ"},{"id":"da5893db-f70c-43f5-a824-257f9d2dc4ce","value":""},{"id":"f1aad0ac-6eab-4368-a9bc-a01679ed97c8","value":"Abrir processo de solicitação para contratar estagiário"},{"id":"08bf8c06-7fb3-4f2e-8ecc-54386eddeeaf","value":"Incluir documento  914 - Formulário de justificativa para necessidade de estagiário"},{"id":"72a1bc10-5f1d-4ceb-ab74-6bc77f741212","value":"Incluir documento 882 - Formulário de solicitação de estagiário"},{"id":"d749a5d7-b670-4b08-bb5b-4083ef7ff11e","value":"Incuir documento 872 - Despacho Simples"},{"id":"244578de-bbcd-400b-aa18-cde0345da210","value":"Vaga disponível?"},{"id":"78b0f9c7-0162-4c73-a279-996c74a27ec9","value":"Abrir vaga junto ao CIEE"},{"id":"444d30ca-713d-4883-b413-a42c5cd7f669","value":"Incluir documento 912 - Formulário de seleção de estagiário "},{"id":"4b18fa61-0ae8-41cb-8382-e30277ec81a8","value":"Fazer carta de aprovação"},{"id":"9cf412b2-3220-4e79-984d-8000744580ab","value":"Enviar documento 912 e carta de aprovação para CIEE"},{"id":"dd090a9f-e676-4b5c-b6c7-420133b11024","value":"Incluir em PDF contrato e documentos"},{"id":"f8390932-8513-4208-a23b-98ac0ed4076e","value":"Registrar contratono SIAPE "},{"id":"785c8bfd-b12f-4f41-b851-2dbe0a0bf1c5","value":""},{"id":"8bbbff32-9265-4a7d-a13f-1b47626deac1","value":"Comunicar chefia imediata"},{"id":"a589ce56-ca1b-47c9-9baa-736527c5591d","value":"Nova vaga?"},{"id":"9ce01693-7d6e-4ef3-928f-9ea1384698e3","value":"Incluir na lista de espera a necessidade de estagiário"},{"id":"a8c86eb8-900b-492e-a236-be1a939ec348","value":"Aguardar vaga disponível "},{"id":"52d8c4e2-aae1-4691-87ca-a33f8024dc5a","value":"Enviar solicitação com dados para contratação"},{"id":"47f52b75-d1b6-46db-b9e4-283812d3a6e8","value":"Incluir documento 872 - Despacho simples"},{"id":"37b3bef4-a522-49a7-901c-d537aedd8f91","value":"Entrar em contato com estagiário solicitando entrega de documentos"},{"id":"97695f40-73cd-4cce-89c2-94e963b8bc48","value":"Incluir documento 872 - Despacho simples"},{"id":"0e43781a-10ff-4f2c-86cb-a0fe8de9d91d","value":"Interesse em renovar estágio?"},{"id":"8f9f444c-5050-479e-a930-dbb49e648c10","value":"Incluir documento  889 - Formulário de desligamento de estagiário"},{"id":"cbb8fb60-05a7-4a34-ae1a-6d0dd4bb4149","value":"Incluir documento 911 - Formulário de  renovação de estagiário"},{"id":"480fcf6a-a4e8-4a3c-9be4-5dc4a2e7043d","value":"Enviar documento 911 e documento de renovação para CIEE"},{"id":"2066988f-0193-4f7b-a367-f566dd43191c","value":"Renovar contrato pelo site do CIEE"},{"id":"86d8d7ce-1868-4176-a563-caf37fb8ccf1","value":"Aguardar entrega de documentos"},{"id":"df9ecd46-500e-4b6e-bfd9-7e1e32fb6e53","value":"Aguardar entrega de termo aditivo"},{"id":"1b37411b-f3c5-4e44-b256-296cf693d42a","value":"Incluir em PDF termo aditivo"},{"id":"7db998dc-bd96-4401-b0b6-4227a37afc7c","value":"Estágio pode ser renovado?"},{"id":"65994f8a-6a2d-4a17-9619-0b6f6f0cbf71","value":"Rescindir contrato pelo site do CIEE"},{"id":"a18d623e-7ec0-4598-83bf-293bf45dafce","value":"Incluir em PDF rescisão"},{"id":"0e9f62ae-9559-421f-af58-1e03ba035f0b","value":"Registrar rescisão no SIAPE"},{"id":"4d2a8812-df53-4151-9181-fe60c6624399","value":"Guardar processo até a escolha do estagiário"},{"id":"88d40dba-6fab-48ae-9673-a26e921912f7","value":"Aguardar até 30 dias antes do término do contrato"},{"id":"afcb6ab5-a8d0-4cf9-aaab-90c7f6a9809f","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"4489954a-fdc5-46fb-8074-483eae56cf90","value":"Verificar lista de espera"},{"id":"cc8f0f2a-1100-4fe9-bcbb-efb2d2106787","value":"Inclui em PDF documentos"},{"id":"59af45a8-0b6d-45a5-be84-8a6a15d525fd","value":"Incluir documento 872 - Despacho simples"},{"id":"1c5842ba-659e-4616-a226-0e6f64aac59d"},{"id":"debcd012-2f7c-417b-9f00-7ba45d32da04"},{"id":"d2709024-cd04-4100-874f-8b4547a2ee33"},{"id":"d5000655-4ca5-4f0b-b5ca-08b6cea1f854"},{"id":"628d061c-bb98-449b-b821-0e3685261d5c"},{"id":"6dec3f26-387f-4af2-8a09-d5ec61b94c39"},{"id":"b74e0a7a-5834-472b-8739-dde299e2e35b"},{"id":"bb541f87-7acc-49d8-9849-6a4e9a688224"},{"id":"cfaec453-f675-40c4-9d29-182ad6784d00"},{"id":"c501fd59-043f-4cfb-954c-83a453fa276d"},{"id":"73222932-3c7f-47e9-812a-8fddc5bf3609"},{"id":"4383c657-42e3-4adb-a49f-c444f3986d7f"},{"id":"88371a97-f2e4-4b29-a3bb-9e95046b8273"},{"id":"c8dc37da-e1c7-44d9-b078-b09ff89092b2"},{"id":"4b1ce2b0-0e7e-4c1e-aedd-c38a5e6481a6"},{"id":"a6db4d4a-5743-4ad4-9273-0dd9770854a1"},{"id":"0e44eb68-0c26-44f7-a9e5-8ad32ee55130"},{"id":"d370eeee-d16b-4528-a84a-51d35abd17bf"},{"id":"7818e42a-27f2-4ea4-96cb-1a891550ccd2"},{"id":"4860c5fa-5193-48ba-83f1-c2b679962e6a"}]}]}