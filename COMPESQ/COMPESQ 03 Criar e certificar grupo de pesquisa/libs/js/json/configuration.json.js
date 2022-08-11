Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[COMPESQ] 03 Criar e certificar grupo de pesquisa","publishDate":"11/08/2022 10:01:06","pages":[{"id":"53c58b95-5006-4483-896f-230823c5cde3","name":"[COMPESQ] 03 Criar e certificar grupo de pesquisa","version":"1.0","author":"henriquems","image":"files\\diagrams\\COMPESQ]_03_Criar_e_certificar_grupo_de_pesquisa.png","isSubprocessPage":false,"elements":[{"id":"81b50a4e-bbd4-4bb7-b6d0-125ede5a56f7","name":"[COMPESQ] 03 Criar e certificar grupo de pesquisa","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1688.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d176f39b-e0cb-4128-9617-dd330e899e6d","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":148.0,"y":157.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3f16f468-9a28-4c4e-9128-d64a61712975","name":"Abrir processo de criação e certificação de grupos de pesquisa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":264.0,"y":136.0}],"radius":0.0,"height":73.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"120c16dc-3a00-419c-91c8-5ff2027376aa","name":"Incluir documento 405 - Formulário de criação e certificação de GP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":451.0,"y":136.5}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"865937be-3eeb-46ca-b66d-d1b83340f52f","name":"Assinar formulário de criação e certificação de GP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":451.0,"y":343.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7cff9a9f-8366-471a-85d1-3b39d5677c18","name":"Enviar processo para COMPESQ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":668.0,"y":142.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e95974c5-639b-4a02-8983-f8ae7b0ec837","name":"Avaliar solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":668.5,"y":709.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a0d512e0-1bcd-446e-8f03-4a4384e4275e","name":"Inserir documento 872 -  Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":841.0,"y":706.0}],"radius":0.0,"height":66.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b1c2f936-788e-40d3-8a0a-8a1efcbe8c1f","name":"Solicitação deferida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1010.0,"y":719.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"09d2db3c-c04f-4a74-a3ec-94cb953590f3","name":"Comunicar pesquisador solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1163.0,"y":709.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82b9fc9a-a95a-4acc-ae52-ba0cc5995e6a","name":"Fazer o cadastro do grupo no DGP/CNPq","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1324.0,"y":122.0}],"radius":0.0,"height":66.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8f3159a-1b08-485b-be3e-ce706d081e43","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1487.0,"y":120.0}],"radius":0.0,"height":70.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"16cad8e1-10f8-483a-8710-4a67a07cfc75","name":"Gestor da UFCSPA no DGP/CNPq está na própria Comissão de Pesquisa?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1529.5,"y":646.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"7d1396dd-1387-4a59-83eb-2fbc31590baa","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1709.5,"y":636.5}],"radius":0.0,"height":61.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ea856dab-365f-4d59-b560-90678833612f","name":"Conceder certificação ao grupo no DGP/CNPq","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1705.0,"y":1173.0}],"radius":0.0,"height":70.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"674155a7-9598-40be-811c-60812431027a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1709.0,"y":1305.0}],"radius":0.0,"height":73.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dde50e8f-b745-4534-a715-5f659de45387","name":"Dar ciência no processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1908.0,"y":1015.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15026b9e-d747-41b9-81a4-83d3fdbb198c","name":"Conceder certificação ao grupo no DGP/CNPq","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1500.0,"y":800.0}],"radius":0.0,"height":65.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6ed25db2-3f65-4dfe-b775-1d399eda2414","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1497.5,"y":966.0}],"radius":0.0,"height":73.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b1bff5dd-7c46-4c37-adae-99bed8660366","name":"Comunicar pesquisador solicitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":985.0,"y":882.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0f8727d0-0e71-4bc0-99ed-012db207268a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":982.5,"y":1026.0}],"radius":0.0,"height":64.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"32462323-adb2-4d65-9ab6-22f74eec893f","name":"[DIARQ] 01 Realizar tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1908.0,"y":1594.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"56adfef5-0bf4-4741-b810-90789cb80004","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2037.0,"y":1609.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"010a8653-c16d-4671-8b9b-69f4f614e248","name":"Pesquisador solicitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":275.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7cfac5a3-a9f8-48f8-9698-81270b5922a2","name":"Membros do grupo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":295.0}],"radius":0.0,"height":278.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4a81fde5-9610-4278-8660-1337b7731e93","name":"COMPESQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":573.0}],"radius":0.0,"height":550.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"86947d67-d5a2-48bd-bed8-12a2d5a4f44e","name":"PROPPG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1123.0}],"radius":0.0,"height":385.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"4a58706b-47aa-478c-8288-b70ed5fb8f8a","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1508.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"53c58b95-5006-4483-896f-230823c5cde3","containerName":"[COMPESQ] 03 Criar e certificar grupo de pesquisa","isSubprocess":false,"elements":[{"id":"81b50a4e-bbd4-4bb7-b6d0-125ede5a56f7","value":"[COMPESQ] 03 Criar e certificar grupo de pesquisa"},{"id":"010a8653-c16d-4671-8b9b-69f4f614e248","value":"Pesquisador solicitante"},{"id":"7cfac5a3-a9f8-48f8-9698-81270b5922a2","value":"Membros do grupo"},{"id":"4a81fde5-9610-4278-8660-1337b7731e93","value":"COMPESQ"},{"id":"86947d67-d5a2-48bd-bed8-12a2d5a4f44e","value":"PROPPG"},{"id":"4a58706b-47aa-478c-8288-b70ed5fb8f8a","value":"DIARQ"},{"id":"d176f39b-e0cb-4128-9617-dd330e899e6d","value":""},{"id":"3f16f468-9a28-4c4e-9128-d64a61712975","value":"Abrir processo de criação e certificação de grupos de pesquisa"},{"id":"120c16dc-3a00-419c-91c8-5ff2027376aa","value":"Incluir documento 405 - Formulário de criação e certificação de GP"},{"id":"865937be-3eeb-46ca-b66d-d1b83340f52f","value":"Assinar formulário de criação e certificação de GP"},{"id":"7cff9a9f-8366-471a-85d1-3b39d5677c18","value":"Enviar processo para COMPESQ"},{"id":"e95974c5-639b-4a02-8983-f8ae7b0ec837","value":"Avaliar solicitação"},{"id":"b1c2f936-788e-40d3-8a0a-8a1efcbe8c1f","value":"Solicitação deferida?"},{"id":"ea856dab-365f-4d59-b560-90678833612f","value":"Conceder certificação ao grupo no DGP/CNPq"},{"id":"09d2db3c-c04f-4a74-a3ec-94cb953590f3","value":"Comunicar pesquisador solicitante"},{"id":"82b9fc9a-a95a-4acc-ae52-ba0cc5995e6a","value":"Fazer o cadastro do grupo no DGP/CNPq"},{"id":"f8f3159a-1b08-485b-be3e-ce706d081e43","value":"Incluir documento 872 - Despacho simples"},{"id":"7d1396dd-1387-4a59-83eb-2fbc31590baa","value":"Incluir documento 872 - Despacho simples"},{"id":"a0d512e0-1bcd-446e-8f03-4a4384e4275e","value":"Inserir documento 872 -  Despacho simples"},{"id":"b1bff5dd-7c46-4c37-adae-99bed8660366","value":"Comunicar pesquisador solicitante"},{"id":"32462323-adb2-4d65-9ab6-22f74eec893f","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"674155a7-9598-40be-811c-60812431027a","value":"Incluir documento 872 - Despacho simples"},{"id":"16cad8e1-10f8-483a-8710-4a67a07cfc75","value":"Gestor da UFCSPA no DGP/CNPq está na própria Comissão de Pesquisa?"},{"id":"15026b9e-d747-41b9-81a4-83d3fdbb198c","value":"Conceder certificação ao grupo no DGP/CNPq"},{"id":"dde50e8f-b745-4534-a715-5f659de45387","value":"Dar ciência no processo"},{"id":"6ed25db2-3f65-4dfe-b775-1d399eda2414","value":"Incluir documento 872 - Despacho simples"},{"id":"56adfef5-0bf4-4741-b810-90789cb80004","value":""},{"id":"0f8727d0-0e71-4bc0-99ed-012db207268a","value":"Incluir documento 872 - Despacho simples"},{"id":"70648277-acf3-4c8d-bc16-59352486c1de"},{"id":"9a25ba23-dabc-4746-8267-1f8f99d1712e"},{"id":"b8ea66d7-e739-47d0-9080-ba04afaf8c64"},{"id":"a8621c00-ed23-4965-a7b7-f41f53b7ffc4"},{"id":"12f9470f-75dd-46b7-96cd-d2342a01f591"},{"id":"e96abc89-9288-4d3a-acd0-72144891b2d8"},{"id":"b79789d0-f7a9-4cf7-b468-ae6d1dbe42c5"},{"id":"be8b2e56-61e1-444c-8dab-2df981e04b5c"},{"id":"bea18afb-9975-4066-8bbe-b8453054c800"},{"id":"a3692601-3720-4cc3-a21d-6bf1c87d236a"},{"id":"f907e535-e6c3-47be-b504-4bf4acf2b84b"},{"id":"22d4d31d-5abe-4de4-bac7-d0bbff400d48"},{"id":"930d052d-4d31-4e31-8b8b-c4833fa1d640"},{"id":"db4e4468-d7d8-4a8e-b173-b5e57d991dd9"},{"id":"4e35915b-988b-429e-9ac9-34589d260537"},{"id":"f23ad0c5-b862-4ef0-beca-6e627997dc2c"},{"id":"729ff830-af06-4eaf-addc-322e18766aa2"},{"id":"8634bb8a-740a-48d3-ba27-8a7557c99f61"},{"id":"7e8446cc-f761-40c2-9b56-c72141fe4135"},{"id":"cb22afda-5572-455e-8d06-cc151eed9a4a"},{"id":"627282dc-80b6-45bd-b904-5be97d6097c5"},{"id":"ce3f7dcc-c1c0-4289-86dc-ab21d247efe3"},{"id":"edf9de2f-81d4-4256-9c5f-5f18869970b0"},{"id":"260898bf-2d75-4239-8798-8d93ed5a720a"}]}]}