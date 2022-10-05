Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[COREMU] 12 Solicitar aproveitamento de horas para formação","publishDate":"05/10/2022 14:16:36","pages":[{"id":"8c6149d1-c996-47e3-8d97-416bc980ee2b","name":"[COREMU] 12 Solicitar aproveitamento de horas para formação","version":"1.0","author":"Simone","image":"files\\diagrams\\COREMU]_12_Solicitar_aproveitamento_de_horas_para_formacao.png","isSubprocessPage":false,"elements":[{"id":"2afe5546-8330-4ee9-87ea-cdfdd9f8131b","name":"[COREMU] 12 Solicitar aproveitamento de horas para formação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1572.00012,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"83fe10cd-80b0-423f-ac6f-e8f81ebcfaee","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":155.0,"y":241.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e39826f5-18ff-4eeb-ad94-df84ab5114f4","name":"Abrir processo de aproveitamento de horas para formação para o SUS da residência multiprofissional","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":540.0,"y":119.0}],"radius":0.0,"height":87.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3b32d681-7a2c-48c8-a4b8-154af1219fe6","name":"Incluir documento 507 - Encaminhamento REMIS formação SUS","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":757.0,"y":130.0}],"radius":0.0,"height":65.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bbc62afe-9d13-4f6f-bdab-56c09d9fa136","name":"Incluir em PDF documentos comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":982.0,"y":347.0}],"radius":0.0,"height":64.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"65ebcd52-72a9-49de-a9ad-75d627f9e1d9","name":"Liberar acesso externo para o Residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":991.5,"y":626.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"945f43ca-1233-433b-bcd9-1b34062b7ed2","name":"Analisar a documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1152.0,"y":724.1666}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"77cdf4c2-1d08-4734-ad76-2299feb75fbb","name":"Há pendências ou indeferimentos nos itens enviados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1177.0,"y":961.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9d6dce10-2b57-44f4-80e6-320987bf6c76","name":"Notificar o Residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1317.0,"y":951.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2eebabe8-3f5e-4911-8435-a9ac18fbba4b","name":"Aguardar o residente resolver pendência/ indeferimento","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1578.0,"y":966.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f7085340-5e0b-48a9-8171-45d98e5edb85","name":"Resolver pendência ou indeferimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1454.0,"y":320.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"773aebe6-4653-4f08-8356-82d4115d7f31","name":"Pendência/ indeferimento resolvido no prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1801.0,"y":961.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"25acd7a4-10c8-4924-8c55-e1f74c128c6c","name":"Incluir  documento  872 - Despacho  simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1970.0,"y":950.0}],"radius":0.0,"height":63.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f2ad1d65-f949-415c-ab7a-0535cdf385c8","name":"Notificar o Residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1976.0,"y":1105.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a4659800-6eb4-4271-8559-008d39a85e57","name":"Notificar o Residente ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1152.0,"y":1063.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56a030af-5e24-498e-8ee6-4305295839fe","name":"Registrar as atividades da Formação na pasta do Residente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1125.0,"y":1272.0}],"radius":0.0,"height":60.0,"width":144.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"47f13cf3-c3f9-43bf-acc0-2b7689d21df7","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1976.0,"y":1429.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"802cd27a-dec9-4c74-9f6a-b6143ab6664d","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2118.0,"y":1444.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"1f8aa239-f46d-4a75-ab1d-9af430b6f3f3","name":"Residente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":518.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c5c35517-41e7-46ce-8b88-998da6dbd06e","name":"Comissão de Ensino","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":538.0}],"radius":0.0,"height":676.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"14ea9752-6c05-4297-afe8-7591045c6951","name":"COREMU","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1214.8}],"radius":0.0,"height":176.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fa7090bb-2207-403f-93a2-44d3ff67ba76","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1391.5}],"radius":0.0,"height":200.500122,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1f8aa239-f46d-4a75-ab1d-9af430b6f3f3","name":"Residente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":518.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c5c35517-41e7-46ce-8b88-998da6dbd06e","name":"Comissão de Ensino","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":538.0}],"radius":0.0,"height":676.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"14ea9752-6c05-4297-afe8-7591045c6951","name":"COREMU","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1214.8}],"radius":0.0,"height":176.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fa7090bb-2207-403f-93a2-44d3ff67ba76","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1391.5}],"radius":0.0,"height":200.500122,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"16204685-5419-4b70-9ce1-eae736c29c96","name":"Verificar tipo de formação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":244.0,"y":226.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"17eb853d-5782-4320-a763-12cb894932dc","name":"Tipo de formação","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":395.0,"y":236.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Formação para o SUS","elementType":"SequenceFlow","properties":[]},{"name":"Formação complementar","elementType":"SequenceFlow","properties":[]}]},{"id":"799bc1ef-33dc-4078-bf55-92c357981a1f","name":"Abrir processo de aproveitamento de horas para formação complementar da residência multiprofissional ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":541.0,"y":333.0}],"radius":0.0,"height":92.0,"width":146.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"995133f2-94f1-4d57-a82a-73455b182f20","name":"Incluir documento 506 - Encaminhamento REMIS formação complementar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":770.0,"y":342.5}],"radius":0.0,"height":75.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bdfe14be-5f32-4623-b727-4cb6c16533e1","name":"Alterar nível de acesso do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":991.5,"y":724.1666}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"16e40da1-83b4-4a30-a68a-45058a64f026","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1145.5,"y":818.0}],"radius":0.0,"height":70.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9077cf4d-0ee7-4b2c-8255-69ee0f3e83ec","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1479.0,"y":961.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f2ec8c09-a950-46b6-948b-74e176bbc8b6","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1663.0,"y":961.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"4cf78546-089d-4753-87f1-2617380e9539","name":"Incluir documento 872 - Despacho simples ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1976.0,"y":1267.5}],"radius":0.0,"height":69.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"8c6149d1-c996-47e3-8d97-416bc980ee2b","containerName":"[COREMU] 12 Solicitar aproveitamento de horas para formação","isSubprocess":false,"elements":[{"id":"2afe5546-8330-4ee9-87ea-cdfdd9f8131b","value":"[COREMU] 12 Solicitar aproveitamento de horas para formação"},{"id":"1f8aa239-f46d-4a75-ab1d-9af430b6f3f3","value":"Residente"},{"id":"c5c35517-41e7-46ce-8b88-998da6dbd06e","value":"Comissão de Ensino"},{"id":"14ea9752-6c05-4297-afe8-7591045c6951","value":"COREMU"},{"id":"fa7090bb-2207-403f-93a2-44d3ff67ba76","value":"DIARQ"},{"id":"83fe10cd-80b0-423f-ac6f-e8f81ebcfaee","value":""},{"id":"e39826f5-18ff-4eeb-ad94-df84ab5114f4","value":"Abrir processo de aproveitamento de horas para formação para o SUS da residência multiprofissional"},{"id":"3b32d681-7a2c-48c8-a4b8-154af1219fe6","value":"Incluir documento 507 - Encaminhamento REMIS formação SUS"},{"id":"bbc62afe-9d13-4f6f-bdab-56c09d9fa136","value":"Incluir em PDF documentos comprobatórios"},{"id":"65ebcd52-72a9-49de-a9ad-75d627f9e1d9","value":"Liberar acesso externo para o Residente"},{"id":"945f43ca-1233-433b-bcd9-1b34062b7ed2","value":"Analisar a documentação"},{"id":"77cdf4c2-1d08-4734-ad76-2299feb75fbb","value":"Há pendências ou indeferimentos nos itens enviados?"},{"id":"9d6dce10-2b57-44f4-80e6-320987bf6c76","value":"Notificar o Residente"},{"id":"2eebabe8-3f5e-4911-8435-a9ac18fbba4b","value":"Aguardar o residente resolver pendência/ indeferimento"},{"id":"f7085340-5e0b-48a9-8171-45d98e5edb85","value":"Resolver pendência ou indeferimento"},{"id":"773aebe6-4653-4f08-8356-82d4115d7f31","value":"Pendência/ indeferimento resolvido no prazo?"},{"id":"25acd7a4-10c8-4924-8c55-e1f74c128c6c","value":"Incluir  documento  872 - Despacho  simples"},{"id":"f2ad1d65-f949-415c-ab7a-0535cdf385c8","value":"Notificar o Residente"},{"id":"a4659800-6eb4-4271-8559-008d39a85e57","value":"Notificar o Residente "},{"id":"56a030af-5e24-498e-8ee6-4305295839fe","value":"Registrar as atividades da Formação na pasta do Residente"},{"id":"802cd27a-dec9-4c74-9f6a-b6143ab6664d","value":""},{"id":"4cf78546-089d-4753-87f1-2617380e9539","value":"Incluir documento 872 - Despacho simples "},{"id":"47f13cf3-c3f9-43bf-acc0-2b7689d21df7","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"16204685-5419-4b70-9ce1-eae736c29c96","value":"Verificar tipo de formação"},{"id":"17eb853d-5782-4320-a763-12cb894932dc","value":"Tipo de formação"},{"id":"799bc1ef-33dc-4078-bf55-92c357981a1f","value":"Abrir processo de aproveitamento de horas para formação complementar da residência multiprofissional "},{"id":"995133f2-94f1-4d57-a82a-73455b182f20","value":"Incluir documento 506 - Encaminhamento REMIS formação complementar"},{"id":"bdfe14be-5f32-4623-b727-4cb6c16533e1","value":"Alterar nível de acesso do processo"},{"id":"16e40da1-83b4-4a30-a68a-45058a64f026","value":"Incluir documento 872 - Despacho simples"},{"id":"9077cf4d-0ee7-4b2c-8255-69ee0f3e83ec","value":""},{"id":"f2ec8c09-a950-46b6-948b-74e176bbc8b6","value":""},{"id":"c9cb6ae9-8642-4e00-abea-303cc58ed410"},{"id":"bc5fb065-5f1d-43cf-9a02-6f3da3938765"},{"id":"2053d51e-adf1-4cd0-a7a7-e2c255fdb9e0"},{"id":"0fbcfe01-82b3-45ea-af7d-72b6e6d01a63"},{"id":"d3dcd76f-290b-476b-b16e-4e7e7fded996"},{"id":"58f7e29d-6655-4a0b-af4a-43a9e58d2f6d"},{"id":"630004c1-0b5c-49b4-936d-2842e0512dd7"},{"id":"5d4c1dcd-b63e-4dfc-a589-4a21a9b21bdc"},{"id":"6322c312-7efd-4a1e-b0f2-ae1422aca9ff"},{"id":"6f6e5b73-921d-4ce2-b78f-9c2a6eb37fa0","value":""},{"id":"68b84b96-7900-4fc2-9926-fddcb3a8d892"},{"id":"0e93837c-3e2a-4d2b-bfd5-5cb41cbd0d69"},{"id":"eab2bf7b-dfef-463b-8d86-2870c0f94d80"},{"id":"493de90a-b15e-4243-81c1-250596bd1f96"},{"id":"6abf8ab2-e914-44ef-a43f-5a6d179ed4d1"},{"id":"52907f80-d210-403f-9273-ec754209ac97"},{"id":"0cd9285b-d967-4383-8974-7a1057467a58"},{"id":"89ad76c7-050b-4397-88ac-1df258d26607"},{"id":"2479e1f1-ef08-49de-9cf1-a284c6feb1e2"}]}]}