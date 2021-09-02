Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[PREF] 61 Solicitar manutenção de câmeras e catracas","publishDate":"20/08/2021 11:18:12","pages":[{"id":"596c6fd8-4dad-443a-b4bd-5d45f0399efe","name":"[PREF] 61 Solicitar manutenção de câmeras e catracas","version":"1.0","author":"marciod","image":"files\\diagrams\\PREF]_61_Solicitar_manutencao_de_cameras_e_catracas.png","isSubprocessPage":false,"elements":[{"id":"bf949469-e88a-4edb-9713-ab483162d891","name":"[PREF] 61 Solicitar manutenção de câmeras e catracas","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1907.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"34625ab5-b910-4661-ae32-faa1b8d37ad8","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADA: Sistema de Pedidos Internos (PI).</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":125.0,"y":117.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"dba9d71a-bf42-4cc8-87e6-36fe272b80ed","name":"Prrencher formulário de  \"Manutenção de câmeras e catracas\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":189.0,"y":93.0}],"radius":0.0,"height":78.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8ddaa3d3-c0e6-424f-abea-12a36f4df6d1","name":"Analisar dados do chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":151.0,"y":409.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4c40a78-8aea-47e1-b661-8a621b78c047","name":"Os dados estão completos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":176.0,"y":518.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"09a8f702-39b9-4c04-9844-fdc1b6f50624","name":"Solicitar maiores informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":309.0,"y":461.0}],"radius":0.0,"height":66.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c33e31a0-7af8-46bb-8e5d-2a7a9dec82cf","name":"Completar informações e/ou esclarecer dúvidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":496.0,"y":207.0}],"radius":0.0,"height":65.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dd77a8b8-fcee-474c-b23a-4e428353bee9","name":"Verificar tipo de serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":149.0,"y":604.0}],"radius":0.0,"height":68.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5c3a6208-87a1-4847-9c6e-7c7c534b7dfc","name":"O serviço é abrangido pelo contrato?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":293.0,"y":618.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"bac1e5f1-dae9-4350-9a0e-0320cbafb7c7","name":"Realizar primeira verificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":268.0,"y":752.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0cf127a8-977f-4718-bd23-887c751401cf","name":"A demanda é simples e pode ser atendida imdediatamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":403.0,"y":762.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"3281748c-0395-4916-85e1-8e59a6434975","name":"É necessário acionar a fiscalização técnica?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":403.0,"y":859.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"bfbc1d2f-97c6-4397-9a4a-f6ca148d5817","name":"Solicitar avaliação técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":378.0,"y":972.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bb24e39d-1d68-4ad9-ae00-c5f322f77c48","name":"Realizar avaliação técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":369.0,"y":1635.0}],"radius":0.0,"height":63.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed001964-c100-45c8-a011-64fcb5c803af","name":"É possível atender à demanda?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":403.0,"y":1754.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c93f9f23-0f2e-4f03-948b-bffa8e07e2e4","name":"Emitir laudo com a indicação da solução","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":510.5,"y":1740.8}],"radius":0.0,"height":68.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"262a5898-8584-4641-9823-a1ccb2e205d9","name":"Fazer ajustes técnicos necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":366.0,"y":1834.0}],"radius":0.0,"height":69.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8f23fd8-1492-4bf2-ab5d-eab03a991938","name":"Informar a conclusão do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":882.0,"y":1838.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1615dc57-521a-4c57-9637-98fb65fe90a0","name":"Verificar a necessidade de acionamento da manutenção predial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":516.0,"y":844.0}],"radius":0.0,"height":70.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"405703d9-535a-4148-9434-5ea04f1c8e94","name":"A intervenção de manutenção predial pode resolver o problema?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":680.0,"y":859.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"aa885652-ceba-4357-95da-500bec78ca23","name":"[PREF] 21 Solicitar serviço de manutenção predial","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":795.0,"y":849.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/PREF/PREF%2021%20Solicitar%20servi%C3%A7o%20de%20manuten%C3%A7%C3%A3o%20predial/#list","type":"url"}},{"id":"6226e8b8-fbd7-4fe4-8741-fd4ce279b80e","name":"Ainda é necessário acionar empresa especializada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":952.0,"y":859.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"9e8122c2-0496-4812-acbc-8392146f294c","name":"Acionar a contratada de controle de acesso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":653.0,"y":989.0}],"radius":0.0,"height":69.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b22621f1-5a29-4038-8b26-9820785f6459","name":"Programar a manutenção necessária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":655.5,"y":1230.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"619e7f13-1095-4214-b784-5c7172ca40ec","name":"Executar o serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":655.5,"y":1346.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7f0e51b6-bd74-415c-bf2a-e87d3f8b8aeb","name":"Informar a conclusão do serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":640.0,"y":1449.0}],"radius":0.0,"height":67.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4d952911-174b-473e-9684-d563bc7d7ece","name":"O serviço foi prestado corretamente?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1108.0,"y":974.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"3ea27648-d484-47d2-bc92-7cdc6f79bbd6","name":"Apontar correções e/ou melhorias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1083.0,"y":1054.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"10d94b72-6e39-4836-a53c-d540eddf69bc","name":"Corrigir e/ou melhorar o serviço","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1083.0,"y":1456.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a1f665b-bf7a-49dc-b24d-731ebd963600","name":"Fazer os ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":526.0,"y":752.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d3ac55b7-c06c-4c80-8cf0-79a988da1f42","name":"Solucionar o chamado no PI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1716.0,"y":752.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6da6a6d8-1a08-49cf-9dc9-30e9e40f32c3","name":"Informar ao solicitante que não será possível atender à solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1269.0,"y":515.0}],"radius":0.0,"height":75.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15bff6a6-0545-46af-b2fd-b6b444be6328","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: servi&ccedil;o de manuten&ccedil;&atilde;o predial.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1746.0,"y":537.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d0be76dc-5ace-416c-8379-31f238c9415a","name":"Preposto do contrato de vigilância patrimonial","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":356.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"01829df4-ec99-447f-b973-91bd879a7c90","name":"Técnico do grupo de trabalho \"Câmeras e catracas\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":376.0}],"radius":0.0,"height":766.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"152b1a37-5a0d-4652-82fc-5514480f0ff7","name":"Técnico do grupo de trabalho \"Contratada de controle de acesso\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1142.0}],"radius":0.0,"height":454.4,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"fd557356-438b-4fc5-925c-718fb482c1a4","name":"Observador do grupo de trabalho \"Fiscalização técnica\"","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1596.4}],"radius":0.0,"height":330.599976,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"596c6fd8-4dad-443a-b4bd-5d45f0399efe","containerName":"[PREF] 61 Solicitar manutenção de câmeras e catracas","isSubprocess":false,"elements":[{"id":"bf949469-e88a-4edb-9713-ab483162d891","value":"[PREF] 61 Solicitar manutenção de câmeras e catracas"},{"id":"d0be76dc-5ace-416c-8379-31f238c9415a","value":"Preposto do contrato de vigilância patrimonial"},{"id":"01829df4-ec99-447f-b973-91bd879a7c90","value":"Técnico do grupo de trabalho \"Câmeras e catracas\""},{"id":"152b1a37-5a0d-4652-82fc-5514480f0ff7","value":"Técnico do grupo de trabalho \"Contratada de controle de acesso\""},{"id":"fd557356-438b-4fc5-925c-718fb482c1a4","value":"Observador do grupo de trabalho \"Fiscalização técnica\""},{"id":"34625ab5-b910-4661-ae32-faa1b8d37ad8","value":""},{"id":"dba9d71a-bf42-4cc8-87e6-36fe272b80ed","value":"Prrencher formulário de  \"Manutenção de câmeras e catracas\""},{"id":"c4c40a78-8aea-47e1-b661-8a621b78c047","value":"Os dados estão completos?"},{"id":"09a8f702-39b9-4c04-9844-fdc1b6f50624","value":"Solicitar maiores informações"},{"id":"dd77a8b8-fcee-474c-b23a-4e428353bee9","value":"Verificar tipo de serviço"},{"id":"15bff6a6-0545-46af-b2fd-b6b444be6328","value":""},{"id":"8ddaa3d3-c0e6-424f-abea-12a36f4df6d1","value":"Analisar dados do chamado"},{"id":"c33e31a0-7af8-46bb-8e5d-2a7a9dec82cf","value":"Completar informações e/ou esclarecer dúvidas"},{"id":"3281748c-0395-4916-85e1-8e59a6434975","value":"É necessário acionar a fiscalização técnica?"},{"id":"7f0e51b6-bd74-415c-bf2a-e87d3f8b8aeb","value":"Informar a conclusão do serviço"},{"id":"4d952911-174b-473e-9684-d563bc7d7ece","value":"O serviço foi prestado corretamente?"},{"id":"3ea27648-d484-47d2-bc92-7cdc6f79bbd6","value":"Apontar correções e/ou melhorias"},{"id":"10d94b72-6e39-4836-a53c-d540eddf69bc","value":"Corrigir e/ou melhorar o serviço"},{"id":"d3ac55b7-c06c-4c80-8cf0-79a988da1f42","value":"Solucionar o chamado no PI"},{"id":"5c3a6208-87a1-4847-9c6e-7c7c534b7dfc","value":"O serviço é abrangido pelo contrato?"},{"id":"6da6a6d8-1a08-49cf-9dc9-30e9e40f32c3","value":"Informar ao solicitante que não será possível atender à solicitação"},{"id":"bb24e39d-1d68-4ad9-ae00-c5f322f77c48","value":"Realizar avaliação técnica"},{"id":"262a5898-8584-4641-9823-a1ccb2e205d9","value":"Fazer ajustes técnicos necessários"},{"id":"ed001964-c100-45c8-a011-64fcb5c803af","value":"É possível atender à demanda?"},{"id":"bac1e5f1-dae9-4350-9a0e-0320cbafb7c7","value":"Realizar primeira verificação"},{"id":"0cf127a8-977f-4718-bd23-887c751401cf","value":"A demanda é simples e pode ser atendida imdediatamente?"},{"id":"2a1f665b-bf7a-49dc-b24d-731ebd963600","value":"Fazer os ajustes necessários"},{"id":"c93f9f23-0f2e-4f03-948b-bffa8e07e2e4","value":"Emitir laudo com a indicação da solução"},{"id":"9e8122c2-0496-4812-acbc-8392146f294c","value":"Acionar a contratada de controle de acesso"},{"id":"bfbc1d2f-97c6-4397-9a4a-f6ca148d5817","value":"Solicitar avaliação técnica"},{"id":"1615dc57-521a-4c57-9637-98fb65fe90a0","value":"Verificar a necessidade de acionamento da manutenção predial"},{"id":"405703d9-535a-4148-9434-5ea04f1c8e94","value":"A intervenção de manutenção predial pode resolver o problema?"},{"id":"aa885652-ceba-4357-95da-500bec78ca23","value":"[PREF] 21 Solicitar serviço de manutenção predial"},{"id":"b22621f1-5a29-4038-8b26-9820785f6459","value":"Programar a manutenção necessária"},{"id":"619e7f13-1095-4214-b784-5c7172ca40ec","value":"Executar o serviço"},{"id":"6226e8b8-fbd7-4fe4-8741-fd4ce279b80e","value":"Ainda é necessário acionar empresa especializada?"},{"id":"c8f23fd8-1492-4bf2-ab5d-eab03a991938","value":"Informar a conclusão do serviço"},{"id":"78728eb1-5d2c-402c-9c75-102b7b08c173"},{"id":"539db17b-e2b0-44bf-b698-001615d65415"},{"id":"97b6e77c-7822-4087-b073-05a077da8af0"},{"id":"0f40f59e-800d-4f46-b162-46223e4a3a16"},{"id":"5a1b6172-314b-4037-929f-83c07060fb12"},{"id":"f671dced-f403-4b46-a39b-d49a1d12ebdc"},{"id":"8eb0c30f-ff5b-4cd2-bad1-b01ab5d6ebd0"},{"id":"123e3ce3-b78e-4d9e-a20b-b2b9a9528c9d"},{"id":"efff32f2-7623-481d-b9aa-dd076a14ddf5"},{"id":"bb6f9743-c64f-467e-9ba8-1cadb0453b05"},{"id":"a6776c74-8c84-4e49-84f0-e0ff4ea52069"},{"id":"981c0c50-4a06-4862-9cde-fae7d979ece1"},{"id":"6bc7af87-39cc-4c58-9452-44c4dd921797"},{"id":"b385efdb-243d-4387-95d2-a26edf8044e3"},{"id":"a4215833-5348-40bf-a821-5fdee8464b03"},{"id":"0fbd6c1d-43cb-4662-9738-59c996161dcd"},{"id":"691d3ac8-3d74-43d3-a50b-1ddede8e6dfa"},{"id":"f48ee978-c316-41df-a8f6-5073b4637adf"},{"id":"aaa2fcb4-0ce5-4d40-b727-0a2256ff76bc"},{"id":"376517ff-f694-4ef7-821f-dc241c49e4a1"},{"id":"7a262b6c-d60d-412f-b02e-1a411991e3f0"},{"id":"8d135370-c735-49c5-89c1-63d277dd49a7"}]}]}