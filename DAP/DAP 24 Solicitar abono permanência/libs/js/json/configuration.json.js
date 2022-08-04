Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DAP] 24 Solicitar abono permanência","publishDate":"04/08/2022 14:26:41","pages":[{"id":"95047078-a93a-4c7a-9a45-b0446f52653a","name":"[DAP] 24 Solicitar abono permanência","version":"1.0","author":"mauriciostuani","image":"files\\diagrams\\DAP]_24_Solicitar_abono_permanencia.png","isSubprocessPage":false,"elements":[{"id":"0977ef7e-949c-4bd4-8e2a-4f84b0368165","name":"[DAP] 24 Solicitar abono permanência","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1163.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"3314e50d-e9c8-4da6-849a-642b40b9d289","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":144.0,"y":53.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3b9b49fd-285b-4015-9294-13d770140c4f","name":"Abrir processo de abono permanência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":274.0,"y":38.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d31f1f45-4dc0-4340-85be-db9dcefbc32c","name":"Incluir documento  859 - Formulário de abono permanência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":265.0,"y":142.0}],"radius":0.0,"height":68.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8471236-9a38-40dd-a055-2bfbdecf2cab","name":"Verificar se interessado atende aos requisitos legais ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":271.5,"y":266.0}],"radius":0.0,"height":64.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"17e41c4b-d296-4c14-86f9-9b5b31a8a0a0","name":"Incluir em PDF documentação comprobatória","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":442.0,"y":268.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5d5ac253-eed7-4651-b2a9-6f9a51a48a6b","name":"Incluir documento  860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":442.0,"y":387.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f4acb3bb-eda9-448e-b3f3-1c850e0e9816","name":"Interessado atende aos requisitos legais?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":467.0,"y":500.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"907460d6-b174-437e-be95-4c3caebc5ec8","name":"Incluir documento 852 - Portaria ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":298.0,"y":490.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"edb15636-166d-4b8c-8419-a9aa28553419","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":328.0,"y":956.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"52f8816a-910a-4145-9ed8-55febacce4f6","name":"Publicar portaria no boletim de serviços eletrônico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":581.5,"y":834.0}],"radius":0.0,"height":64.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"40688a11-cb64-420a-9b4d-751bcd866260","name":"Registrar abono permanência no SIAPE","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":584.0,"y":723.0}],"radius":0.0,"height":61.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4e18bf99-e865-43ed-a837-b0a513651f3c","name":"[DAP] 08 Incluir documentos no AFD","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":586.0,"y":621.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DAP/DAP%2008%20Incluir%20documentos%20no%20AFD/#list","type":"url"}},{"id":"61b6888b-f781-4ff1-b4cf-c50ecf76df2f","name":"Comunicar interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":586.0,"y":490.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c1104c64-b7ff-4238-be7e-1d9986afdd34","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":715.5,"y":489.0}],"radius":0.0,"height":62.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"456a6e48-540f-4c9a-b935-bb6180cb9883","name":"[DIARQ] 01 Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":716.0,"y":1074.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"d8865efa-74e5-4dbf-8e53-7baf81f7e815","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":870.0,"y":1089.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d04d467e-f706-421b-8ec0-d85d96cbc724","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":209.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"88d4d369-7f03-42d4-9690-424ec8096e3e","name":"DAP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":229.0}],"radius":0.0,"height":696.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"763227e4-e556-42da-afa4-e10bd2cf051d","name":"Reitoria","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":925.0}],"radius":0.0,"height":110.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e7054153-c3d7-4a9e-818a-3e95a6d53a27","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1035.0}],"radius":0.0,"height":148.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"95047078-a93a-4c7a-9a45-b0446f52653a","containerName":"[DAP] 24 Solicitar abono permanência","isSubprocess":false,"elements":[{"id":"0977ef7e-949c-4bd4-8e2a-4f84b0368165","value":"[DAP] 24 Solicitar abono permanência"},{"id":"d04d467e-f706-421b-8ec0-d85d96cbc724","value":"Interessado"},{"id":"88d4d369-7f03-42d4-9690-424ec8096e3e","value":"DAP"},{"id":"763227e4-e556-42da-afa4-e10bd2cf051d","value":"Reitoria"},{"id":"e7054153-c3d7-4a9e-818a-3e95a6d53a27","value":"DIARQ"},{"id":"3314e50d-e9c8-4da6-849a-642b40b9d289","value":""},{"id":"3b9b49fd-285b-4015-9294-13d770140c4f","value":"Abrir processo de abono permanência"},{"id":"d31f1f45-4dc0-4340-85be-db9dcefbc32c","value":"Incluir documento  859 - Formulário de abono permanência"},{"id":"c8471236-9a38-40dd-a055-2bfbdecf2cab","value":"Verificar se interessado atende aos requisitos legais "},{"id":"17e41c4b-d296-4c14-86f9-9b5b31a8a0a0","value":"Incluir em PDF documentação comprobatória"},{"id":"f4acb3bb-eda9-448e-b3f3-1c850e0e9816","value":"Interessado atende aos requisitos legais?"},{"id":"5d5ac253-eed7-4651-b2a9-6f9a51a48a6b","value":"Incluir documento  860 - Despacho"},{"id":"61b6888b-f781-4ff1-b4cf-c50ecf76df2f","value":"Comunicar interessado"},{"id":"907460d6-b174-437e-be95-4c3caebc5ec8","value":"Incluir documento 852 - Portaria "},{"id":"edb15636-166d-4b8c-8419-a9aa28553419","value":"Assinar documento em bloco"},{"id":"40688a11-cb64-420a-9b4d-751bcd866260","value":"Registrar abono permanência no SIAPE"},{"id":"d8865efa-74e5-4dbf-8e53-7baf81f7e815","value":""},{"id":"52f8816a-910a-4145-9ed8-55febacce4f6","value":"Publicar portaria no boletim de serviços eletrônico"},{"id":"4e18bf99-e865-43ed-a837-b0a513651f3c","value":"[DAP] 08 Incluir documentos no AFD"},{"id":"456a6e48-540f-4c9a-b935-bb6180cb9883","value":"[DIARQ] 01 Realizar tratamento arquivístico"},{"id":"c1104c64-b7ff-4238-be7e-1d9986afdd34","value":"Incluir documento 872 - Despacho simples"},{"id":"4c279fcb-a472-478e-b9aa-e48f6ed4d97d"},{"id":"d675e60b-1670-4ced-bd13-ab312f2dced4"},{"id":"90bf2798-37d6-430e-b49a-968d05f9e4b1"},{"id":"34166486-d6d1-4323-8cd1-cb01de6e6f20"},{"id":"449011b9-a4e6-44bf-9aa5-4f36f5c928e3"},{"id":"15aa494b-7b97-4764-a4ae-94778d5dacd9"},{"id":"e34233b8-a97d-4a09-ac09-4a7f69a864df"},{"id":"dcbd0968-3adc-4348-98cb-ec81f9b8bf9e"},{"id":"5bc9bc35-8be9-4ec8-9aec-5ee47cb72af9"},{"id":"4da76b67-1c41-48e7-ba5b-93b9db4a5cc3"},{"id":"6c75e8f7-7497-476d-bc68-440bcfddba4b"},{"id":"44a4cf68-e73d-4c54-981d-3bc90d132056"}]}]}