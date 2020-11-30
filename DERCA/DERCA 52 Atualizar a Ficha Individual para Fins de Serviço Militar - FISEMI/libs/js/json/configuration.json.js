Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 52 Atualizar a Ficha Individual para Fins de Serviço Militar - FISEMI","publishDate":"30/11/2020 15:57:21","pages":[{"id":"75367153-2c86-407c-8538-f3174176a860","name":"[DERCA] 52 Atualizar a Ficha Individual para Fins de Serviço Militar - FISEMI","version":"1.0","author":"ricardozago","image":"files\\diagrams\\DERCA]_52_Atualizar_a_Ficha_Individual_para_Fins_de_Servico_Militar___FISEMI.png","isSubprocessPage":false,"elements":[{"id":"cb7f9722-7de1-4f0e-9c47-5b1d87ab288f","name":"[DERCA] 52 Atualizar a Ficha Individual para Fins de Serviço Militar - FISEMI","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":995.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"791753ed-d70b-462f-8fa6-fd8c6ef19a60","name":"Legislação quanto ao serviço militar obrigatório","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADA: Discente em situa&ccedil;&atilde;o de prov&aacute;vel formando.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":178.0,"y":136.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3fbb4bac-4610-46bb-a1a8-2403afadb4a8","name":"Receber ofício das Forças Armadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":312.0,"y":132.0}],"radius":0.0,"height":39.0,"width":211.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4101a27a-31ae-4420-9dc3-54cd21d07d97","name":"Solicitar Discente comparcecer ao DERCA para atualizar FISEMI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":310.0,"y":608.0}],"radius":0.0,"height":50.0,"width":215.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff3289e2-ac8a-435e-98f5-113b6499a2c5","name":"Atualizar FISEMI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":352.0,"y":841.0}],"radius":0.0,"height":55.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c3e88fae-d40c-4e27-9d4c-bbb3989e0d1a","name":"Conferir preenchimento do FISEMI e documentos anexos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":561.0,"y":198.0}],"radius":0.0,"height":60.0,"width":162.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bf160139-7edb-4c22-848f-a248686c61b2","name":"FISEMI e documentos conferem?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":763.0,"y":208.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0dab33bd-4623-40d8-b133-cb09c341e1a3","name":"Realizar ajustes necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":738.0,"y":838.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c642735b-19d6-4643-8d8b-f2e7ee506f17","name":"Encaminhar FISEMI atualizada e ofício às Forças Armadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":844.0,"y":359.0}],"radius":0.0,"height":44.0,"width":182.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"34110105-6a43-4f90-939e-4f48384725a3","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: FISEMI preenchida e enviada &agrave;s For&ccedil;as Armadas.</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1080.0,"y":366.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"337fc061-63ad-4f65-b311-31fbee59d087","name":"FISEMI","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":398.0,"y":937.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"0b5898b1-387c-425d-95eb-ef2e1821ccb2","name":"DERCA - DIS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":279.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c862431f-1c58-4c65-ba90-347e30020cb7","name":"DERCA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":299.0}],"radius":0.0,"height":282.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"acf29ee9-597f-4046-b1d8-f317539e4e76","name":"DERCA - DRA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":581.0}],"radius":0.0,"height":226.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5f507803-faec-44ab-8998-9ce09f204681","name":"Discente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":807.0}],"radius":0.0,"height":208.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"75367153-2c86-407c-8538-f3174176a860","containerName":"[DERCA] 52 Atualizar a Ficha Individual para Fins de Serviço Militar - FISEMI","isSubprocess":false,"elements":[{"id":"cb7f9722-7de1-4f0e-9c47-5b1d87ab288f","value":"[DERCA] 52 Atualizar a Ficha Individual para Fins de Serviço Militar - FISEMI"},{"id":"0b5898b1-387c-425d-95eb-ef2e1821ccb2","value":"DERCA - DIS"},{"id":"c862431f-1c58-4c65-ba90-347e30020cb7","value":"DERCA"},{"id":"acf29ee9-597f-4046-b1d8-f317539e4e76","value":"DERCA - DRA"},{"id":"5f507803-faec-44ab-8998-9ce09f204681","value":"Discente"},{"id":"337fc061-63ad-4f65-b311-31fbee59d087","value":"FISEMI"},{"id":"791753ed-d70b-462f-8fa6-fd8c6ef19a60","value":"Legislação quanto ao serviço militar obrigatório"},{"id":"3fbb4bac-4610-46bb-a1a8-2403afadb4a8","value":"Receber ofício das Forças Armadas"},{"id":"ff3289e2-ac8a-435e-98f5-113b6499a2c5","value":"Atualizar FISEMI"},{"id":"c642735b-19d6-4643-8d8b-f2e7ee506f17","value":"Encaminhar FISEMI atualizada e ofício às Forças Armadas"},{"id":"4101a27a-31ae-4420-9dc3-54cd21d07d97","value":"Solicitar Discente comparcecer ao DERCA para atualizar FISEMI"},{"id":"c3e88fae-d40c-4e27-9d4c-bbb3989e0d1a","value":"Conferir preenchimento do FISEMI e documentos anexos"},{"id":"bf160139-7edb-4c22-848f-a248686c61b2","value":"FISEMI e documentos conferem?"},{"id":"0dab33bd-4623-40d8-b133-cb09c341e1a3","value":"Realizar ajustes necessários"},{"id":"34110105-6a43-4f90-939e-4f48384725a3","value":""},{"id":"8f7fb990-6308-45cd-b995-71c5e910dade"},{"id":"4023da08-0f2e-4dea-b6ee-74c32a9dd12c"},{"id":"758814b9-3dd9-4f43-bcb4-0cfc23e4655a"},{"id":"fda6a210-e80c-44d6-abc1-a0f01e4aa4a6"},{"id":"5bbc8e44-13d6-472a-bf45-d427900bac5f"},{"id":"9d4c4e19-721c-41ce-ad3b-8c14e2a29ec2"},{"id":"b780af9e-8702-4da5-a50b-ff673af2eaf1"},{"id":"3ea3ef1c-bc99-4f17-913e-204bb2a00af4"},{"id":"08de3f32-21a6-4d3d-92d8-a07f022c667d"}]}]}