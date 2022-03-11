Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[COREMU] 11 Realizar solicitação de férias de residentes","publishDate":"11/02/2022 13:41:01","pages":[{"id":"396a9cf7-06eb-41d8-b6c5-60da2ec120a2","name":"[COREMU] 11 Realizar solicitação de férias de residentes","version":"1.0","author":"User","image":"files\\diagrams\\COREMU]_11_Realizar_solicitacao_de_ferias_de_residentes.png","isSubprocessPage":false,"elements":[{"id":"927bf019-87e2-418e-b08e-ef348c40abb6","name":"[COREMU] 11 Realizar solicitação de férias de residentes","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1741.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"8fa967f1-416f-4118-9673-7114ffd95938","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":164.0,"y":106.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"aeca9e09-9e85-480d-9ac2-b4b922a5d348","name":"Abrir processo de solicitação de férias de residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":420.0,"y":82.0}],"radius":0.0,"height":79.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"715bb625-a3fa-48da-9221-4e12b72e89cc","name":"Incluir documento 446 - Formulário  de férias de residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":605.0,"y":84.0}],"radius":0.0,"height":75.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e08e994-cc16-44f0-8bcf-325f0e4cd9c3","name":"Analisar o formulário de pedido de férias ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":915.0,"y":1025.0}],"radius":0.0,"height":74.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e4343203-9dba-47b4-8651-93deb810a801","name":"Preceptor está de acordo com as férias do residente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1181.0,"y":1042.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"60cd880e-aef0-4b06-8489-c1262090d568","name":"Assinar o formulário de pedido de férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1311.0,"y":1032.0}],"radius":0.0,"height":60.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89d3bc9b-11c5-4c51-aee7-58e6d752cdd0","name":"Atribuir o processo ao Tutor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1537.5,"y":527.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0aceaf9a-01f9-47f3-a916-0068a4e9aabd","name":"Analisar o formulário de pedido de férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1739.0,"y":1371.0}],"radius":0.0,"height":76.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eb53e73a-8792-4063-898e-c2b3ce4b56fc","name":"Registrar o período de férias ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1989.50024,"y":598.0}],"radius":0.0,"height":60.0,"width":87.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a6fcfdd-df33-492e-9570-768deb75fc5a","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2427.0,"y":1615.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"27a1cb53-c3c0-4166-a3bc-d2e8a5106875","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2569.0,"y":1630.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"19e22c4f-4b03-47a2-8b59-ef7e71c02335","name":"Residente multiprofissional","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":258.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c756f41b-9e9b-43eb-a542-80218c400b42","name":"Preceptor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":788.0}],"radius":0.0,"height":462.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"798cad7f-d323-4649-a214-0a6cab84b517","name":"Tutor","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1250.0}],"radius":0.0,"height":311.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"8c328249-dc9f-435b-b4f7-3706e44c3c12","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1561.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c445af87-15c2-4f74-8b92-e124f4214a95","name":"Combinar com o preceptor o período de férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":247.0,"y":80.0}],"radius":0.0,"height":82.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d8d1c2e9-5220-41ef-8ec1-c6f5737859d4","name":"Liberar acesso externo ao residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":614.5,"y":314.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a2be2384-9916-4568-b31b-de1e861389d7","name":"Alterar nível de acesso do processo para \"Restrito: Informação pessoal\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":601.0,"y":411.0}],"radius":0.0,"height":94.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0a24620b-dcb6-44d7-be4f-aeff3e393e8b","name":"Verificar se o formulário de pedido de férias foi preenchido corretamente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":599.0,"y":563.0}],"radius":0.0,"height":92.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a6465d77-e22c-4b85-8c46-3ed59d9f1de8","name":"Fomulário foi preenchido corretamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":790.0,"y":589.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ae8ff4f0-f531-4dc5-a764-bc40ecb83f5b","name":"Liberar para assinatura externa do preceptor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":914.5,"y":577.0}],"radius":0.0,"height":64.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6b535ea9-450f-4996-a8c2-7e1ccf5215ff","name":"Comunicar preceptor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":926.0,"y":678.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"452b4044-0648-4737-b324-359fa7487f08","name":"Comunicar COREMU que está de acordo com as férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1519.0,"y":1029.5}],"radius":0.0,"height":67.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ba560f99-6935-4445-96b7-dd29b3a15fc6","name":"Incluir em PDF e-mail encaminhado pelo preceptor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1535.0,"y":648.0}],"radius":0.0,"height":64.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cd4f1656-31eb-4245-856c-14e2f0f549eb","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1866.0,"y":1379.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"48df60fd-b2db-484e-b8fe-614583446867","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2013.0,"y":1389.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"1e726bc4-11b1-490e-8606-1dff79fd1738","name":"Comunicar COREMU que não está de acordo com as férias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1140.5,"y":878.0}],"radius":0.0,"height":72.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8523fc7a-025a-4e19-8515-238ae5eec47e","name":"Incluir em PDF e-mail encaminhado pelo preceptor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1156.0,"y":494.0}],"radius":0.0,"height":72.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"46dbfa2e-38ef-49de-bd38-0105cf1e08b6","name":"Comunicar residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2057.0,"y":385.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d573d275-6935-45a8-9dde-5a62b89108a4","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2257.0,"y":382.0}],"radius":0.0,"height":67.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89f0e9d0-fe4d-487c-8070-c217649b4a8d","name":"Supervisão COREMU","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":278.0}],"radius":0.0,"height":510.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"396a9cf7-06eb-41d8-b6c5-60da2ec120a2","containerName":"[COREMU] 11 Realizar solicitação de férias de residentes","isSubprocess":false,"elements":[{"id":"927bf019-87e2-418e-b08e-ef348c40abb6","value":"[COREMU] 11 Realizar solicitação de férias de residentes"},{"id":"19e22c4f-4b03-47a2-8b59-ef7e71c02335","value":"Residente multiprofissional"},{"id":"89f0e9d0-fe4d-487c-8070-c217649b4a8d","value":"Supervisão COREMU"},{"id":"c756f41b-9e9b-43eb-a542-80218c400b42","value":"Preceptor"},{"id":"798cad7f-d323-4649-a214-0a6cab84b517","value":"Tutor"},{"id":"8c328249-dc9f-435b-b4f7-3706e44c3c12","value":"DIARQ"},{"id":"8fa967f1-416f-4118-9673-7114ffd95938","value":""},{"id":"aeca9e09-9e85-480d-9ac2-b4b922a5d348","value":"Abrir processo de solicitação de férias de residente"},{"id":"715bb625-a3fa-48da-9221-4e12b72e89cc","value":"Incluir documento 446 - Formulário  de férias de residente"},{"id":"8e08e994-cc16-44f0-8bcf-325f0e4cd9c3","value":"Analisar o formulário de pedido de férias "},{"id":"e4343203-9dba-47b4-8651-93deb810a801","value":"Preceptor está de acordo com as férias do residente?"},{"id":"60cd880e-aef0-4b06-8489-c1262090d568","value":"Assinar o formulário de pedido de férias"},{"id":"89d3bc9b-11c5-4c51-aee7-58e6d752cdd0","value":"Atribuir o processo ao Tutor"},{"id":"0aceaf9a-01f9-47f3-a916-0068a4e9aabd","value":"Analisar o formulário de pedido de férias"},{"id":"eb53e73a-8792-4063-898e-c2b3ce4b56fc","value":"Registrar o período de férias "},{"id":"27a1cb53-c3c0-4166-a3bc-d2e8a5106875","value":""},{"id":"2a6fcfdd-df33-492e-9570-768deb75fc5a","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"d8d1c2e9-5220-41ef-8ec1-c6f5737859d4","value":"Liberar acesso externo ao residente"},{"id":"a2be2384-9916-4568-b31b-de1e861389d7","value":"Alterar nível de acesso do processo para \"Restrito: Informação pessoal\""},{"id":"46dbfa2e-38ef-49de-bd38-0105cf1e08b6","value":"Comunicar residente"},{"id":"0a24620b-dcb6-44d7-be4f-aeff3e393e8b","value":"Verificar se o formulário de pedido de férias foi preenchido corretamente"},{"id":"ae8ff4f0-f531-4dc5-a764-bc40ecb83f5b","value":"Liberar para assinatura externa do preceptor"},{"id":"48df60fd-b2db-484e-b8fe-614583446867","value":""},{"id":"a6465d77-e22c-4b85-8c46-3ed59d9f1de8","value":"Fomulário foi preenchido corretamente?"},{"id":"c445af87-15c2-4f74-8b92-e124f4214a95","value":"Combinar com o preceptor o período de férias"},{"id":"452b4044-0648-4737-b324-359fa7487f08","value":"Comunicar COREMU que está de acordo com as férias"},{"id":"1e726bc4-11b1-490e-8606-1dff79fd1738","value":"Comunicar COREMU que não está de acordo com as férias"},{"id":"cd4f1656-31eb-4245-856c-14e2f0f549eb","value":"Incluir documento 872 - Despacho simples"},{"id":"d573d275-6935-45a8-9dde-5a62b89108a4","value":"Incluir documento 872 - Despacho simples"},{"id":"6b535ea9-450f-4996-a8c2-7e1ccf5215ff","value":"Comunicar preceptor"},{"id":"8523fc7a-025a-4e19-8515-238ae5eec47e","value":"Incluir em PDF e-mail encaminhado pelo preceptor"},{"id":"ba560f99-6935-4445-96b7-dd29b3a15fc6","value":"Incluir em PDF e-mail encaminhado pelo preceptor"},{"id":"c9f3dad3-7ccd-43ec-a9c2-d600f581da3f"},{"id":"c2a0eba5-baae-4951-948d-012d022353a0"},{"id":"83ace342-d1e8-41bc-918e-f117b6d1f9c3"},{"id":"a65518ac-a94a-4271-882b-ca7bb0cc4a0f"},{"id":"a1f87244-40ef-4ba4-8b6a-bb112b54034b"},{"id":"7a468e9d-a756-4ee9-a937-712e9d7c2f0d"},{"id":"9005fb81-f84a-4ff8-9964-3c0f757ae07d"},{"id":"25c44bed-5f96-40db-9406-fb72ac717ce5"},{"id":"63555bcc-45b9-4e31-bfd8-e798fb4c863f"},{"id":"4b677dd2-388d-4209-be29-b0325684ce95"},{"id":"6c16040f-c0f7-43fb-b9b8-c0b1b7ba4832"},{"id":"464e3aab-98b3-4fe6-bd04-699db6c2eadb"},{"id":"5c1cb78b-63b3-4cc8-9f25-483ad8c1cc8a"},{"id":"1659456f-985f-4dfc-be9b-acb41cf98817"},{"id":"f2bd5ade-96dc-428b-9570-26b77f70f294"},{"id":"9af65cfe-a92e-4d66-a529-36dfae19f5c7"},{"id":"83996264-ee1e-40eb-a30a-6e9fc3804452"},{"id":"1264fbc7-3748-4c72-874a-5850fbec9ab9"},{"id":"d74528a9-37b4-4ea6-b557-0caa45930889"},{"id":"c942cbe2-91c4-472b-9bd0-c6c84c6d7684"}]}]}