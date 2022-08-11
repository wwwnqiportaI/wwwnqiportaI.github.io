Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[COMPESQ] 04 Registrar projeto de pesquisa no Minha UFCSPA","publishDate":"29/07/2022 08:26:44","pages":[{"id":"fe4a5012-37f2-4b22-886e-8bb7c568dc8f","name":"[COMPESQ] 04 Registrar projeto de pesquisa no Minha UFCSPA","version":"1.0","author":"Bruna","image":"files\\diagrams\\COMPESQ]_04_Registrar_projeto_de_pesquisa_no_Minha_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"9d50a00e-1f0c-430d-8fbc-1d0f27c57fe9","name":"[COMPESQ] 04 Registrar projeto de pesquisa no Minha UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":451.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6a4e34c8-9f11-4451-afa0-380e446762a3","name":"Responder às perguntas da tela","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":858.0,"y":345.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e5fccd23-1397-44f2-9b62-be4b9f489b3d","name":"Clicar em \"validar\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1589.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b7192f48-bef0-4615-9a81-25a640052481","name":"O projeto envolve animais?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1100.0,"y":138.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"93deefa4-08cf-4dd6-ac62-c4ce5d632ca4","name":"Prencher com as informações relacionadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1282.5,"y":325.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aee6ccaa-0220-41fd-a6b1-19c1a947315d","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":112.0,"y":143.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"6d506c72-1f6a-4f29-bdbe-498867ae441d","name":"Acessar o portal Minha UFCSPA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":178.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"74fe36f4-7b1a-4b8a-836d-c377860e544b","name":"Selecionar a opção   \"Projetos de Pesquisa\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":296.0,"y":128.0}],"radius":0.0,"height":60.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0179d499-db8e-4daf-a41e-9e03194c1de5","name":"Clicar na opção “Novo projeto” ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":435.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"88424853-450a-4782-bd9d-f0a00bee7075","name":"Preencher os campos das abas ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":577.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5e9b6cd1-a476-4b5a-8e71-ccff773ebcd2","name":"Projeto já aprovado no CEP, CEUA ou COMPESQ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":726.0,"y":138.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e24f7219-1522-468a-8294-51cb6d44ff7f","name":"Anexar o comprovante de aprovação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":852.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e06b7792-f456-405e-a314-9110a25660b7","name":"Marcar a opção“não” ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":701.0,"y":345.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e789784c-813d-4ce7-9fce-1d3daed9ce7a","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":998.0,"y":138.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"O projeto envolve animais?","elementType":"SequenceFlow","properties":[]}]},{"id":"603be187-a3f6-49cf-9590-ce4d2b5dea11","name":"Inserir os demais arquivos necessários para o registro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1275.0,"y":122.0}],"radius":0.0,"height":72.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"95167e54-8592-4b6c-b6d9-8d28531cdb7d","name":"Seguir para a aba 8 ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1439.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"221a7ffd-8057-473a-a7cd-d9686b3f6f98","name":"Seguir para a aba 9 ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1740.0,"y":128.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3d1ca55-8a34-4b1e-a500-9b50efed7fd5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1891.0,"y":143.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"da601668-416e-4548-adb3-0a7c82171b3b","name":"Pesquisador (a)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":451.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"fe4a5012-37f2-4b22-886e-8bb7c568dc8f","containerName":"[COMPESQ] 04 Registrar projeto de pesquisa no Minha UFCSPA","isSubprocess":false,"elements":[{"id":"9d50a00e-1f0c-430d-8fbc-1d0f27c57fe9","value":"[COMPESQ] 04 Registrar projeto de pesquisa no Minha UFCSPA"},{"id":"da601668-416e-4548-adb3-0a7c82171b3b","value":"Pesquisador (a)"},{"id":"aee6ccaa-0220-41fd-a6b1-19c1a947315d","value":""},{"id":"6d506c72-1f6a-4f29-bdbe-498867ae441d","value":"Acessar o portal Minha UFCSPA"},{"id":"74fe36f4-7b1a-4b8a-836d-c377860e544b","value":"Selecionar a opção   \"Projetos de Pesquisa\""},{"id":"0179d499-db8e-4daf-a41e-9e03194c1de5","value":"Clicar na opção “Novo projeto” "},{"id":"88424853-450a-4782-bd9d-f0a00bee7075","value":"Preencher os campos das abas "},{"id":"5e9b6cd1-a476-4b5a-8e71-ccff773ebcd2","value":"Projeto já aprovado no CEP, CEUA ou COMPESQ?"},{"id":"e24f7219-1522-468a-8294-51cb6d44ff7f","value":"Anexar o comprovante de aprovação"},{"id":"e06b7792-f456-405e-a314-9110a25660b7","value":"Marcar a opção“não” "},{"id":"e789784c-813d-4ce7-9fce-1d3daed9ce7a","value":""},{"id":"603be187-a3f6-49cf-9590-ce4d2b5dea11","value":"Inserir os demais arquivos necessários para o registro"},{"id":"95167e54-8592-4b6c-b6d9-8d28531cdb7d","value":"Seguir para a aba 8 "},{"id":"221a7ffd-8057-473a-a7cd-d9686b3f6f98","value":"Seguir para a aba 9 "},{"id":"a3d1ca55-8a34-4b1e-a500-9b50efed7fd5","value":""},{"id":"6a4e34c8-9f11-4451-afa0-380e446762a3","value":"Responder às perguntas da tela"},{"id":"e5fccd23-1397-44f2-9b62-be4b9f489b3d","value":"Clicar em \"validar\""},{"id":"b7192f48-bef0-4615-9a81-25a640052481","value":"O projeto envolve animais?"},{"id":"93deefa4-08cf-4dd6-ac62-c4ce5d632ca4","value":"Prencher com as informações relacionadas"},{"id":"0f4c735f-493f-4194-ad85-9cc14dc07d0d"},{"id":"41a9b9b1-9bb7-4921-9ab7-ba49994b6e87"},{"id":"56d3dd97-1552-4d6b-883b-8fb9a8ece887"},{"id":"891f24f7-0810-41fa-a56f-51bcb05df0ca"},{"id":"aa0bd660-7ee1-4283-a055-0b143a0ef966"},{"id":"05e2707b-e25f-446d-9ced-26ee13a1ca7a"},{"id":"f6bbbaf8-8ae9-4846-a9c2-0e4f8c7172f3"},{"id":"224ebb25-ffc3-4b3e-8786-b4a0e1fd1449"},{"id":"b8800033-6772-4f2e-ada0-023a7f0d4151"},{"id":"a4613cf0-1bd3-4e6e-9a61-c32bce2d8b5b"},{"id":"9a8b50d9-9d43-446c-8ad5-87ab42b83c87"},{"id":"8d65a102-5282-4494-be42-2c7cbc59cfe8"},{"id":"678b8c1a-6f75-4bc9-9e84-292e5772942e"},{"id":"16a03663-dae1-4af5-a7c3-a2641b9a780c"},{"id":"422460a0-d687-4250-b17a-4bb32817168d"},{"id":"dcd64f1b-b8b3-4cca-b55d-843b47c15592"}]}]}