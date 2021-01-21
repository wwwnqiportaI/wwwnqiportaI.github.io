Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CDI] 07 Atualizar o Cadastro e-MEC","publishDate":"19/01/2021 21:40:09","pages":[{"id":"44632a38-e5cb-4cda-a0ac-ad2f5668cfea","name":"[CDI] 07 Atualizar o cadastro e-MEC","version":"1.0","author":"celok","image":"files\\diagrams\\CDI]_07_Atualizar_o_cadastro_e_MEC.png","isSubprocessPage":false,"elements":[{"id":"093fc450-4f64-462e-83e7-0b8996282339","name":"[CDI] 07 Atualizar o cadastro e-MEC","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":467.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7f57952e-cb63-4b90-b43d-b6969d09641a","name":"Contínuo, na medida das alterações institucionais","description":"<p style=\"tab-stops:right 452.25pt;text-align:left;text-indent:0pt;margin:0pt 0pt 6pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">ENTRADAS: Informa&ccedil;&otilde;es institucionais e de cursos</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":118.0,"y":102.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"4a5954a5-4542-4c61-8350-29af94820bee","name":"Coletar as informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":198.0,"y":87.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ab64aa23-c641-4629-814a-d1268778e8bc","name":"Manter atualizados os dados institucionais e de cursos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":341.0,"y":80.0}],"radius":0.0,"height":74.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0de7ca3f-3716-4688-b6b2-72e9e98fd42a","name":"Encaminhar e-mail para os setores da UFCSPA envolvidos nos respectivos processos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":511.0,"y":77.0}],"radius":0.0,"height":80.0,"width":127.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94689f79-0bfe-483f-beea-f96fff8981a6","name":"Encaminhar documentação e/ou informações requisitadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":519.5,"y":318.0}],"radius":0.0,"height":76.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6326618a-eaa9-4811-940a-4d9cd4cd76b2","name":"Documentações/informações estão corretas/completas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":720.0,"y":98.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"885fc277-4cee-4876-a5c7-fcbd64cf4847","name":"Corrigir ou complementar documentação/informações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":826.0,"y":320.0}],"radius":0.0,"height":71.0,"width":157.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fe2e7ae6-96ec-40a9-9b71-0cea06a26fe1","name":"Alimentar o sistema do e-MEC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":852.0,"y":88.0}],"radius":0.0,"height":60.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e3bf24b-ecf1-4469-a966-c501d1c8c40d","name":"Cadastro e-MEC atualizado","description":"<p style=\"tab-stops:right 452.25pt;text-align:left;text-indent:0pt;margin:0pt 0pt 6pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DA: informa&ccedil;&otilde;es institucionais atualizadas relativas aos cursos cadastrados no sistema</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1000.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"37b9d809-5a6e-4936-9500-b4e9fcd1ce36","name":"CDI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":233.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"db5baab9-7855-4919-bf64-d3e2cdf321b3","name":"Setores administrativos e/ou acadêmicos","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":253.0}],"radius":0.0,"height":234.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"44632a38-e5cb-4cda-a0ac-ad2f5668cfea","containerName":"[CDI] 07 Atualizar o cadastro e-MEC","isSubprocess":false,"elements":[{"id":"093fc450-4f64-462e-83e7-0b8996282339","value":"[CDI] 07 Atualizar o cadastro e-MEC"},{"id":"37b9d809-5a6e-4936-9500-b4e9fcd1ce36","value":"CDI"},{"id":"db5baab9-7855-4919-bf64-d3e2cdf321b3","value":"Setores administrativos e/ou acadêmicos"},{"id":"7f57952e-cb63-4b90-b43d-b6969d09641a","value":"Contínuo, na medida das alterações institucionais"},{"id":"4a5954a5-4542-4c61-8350-29af94820bee","value":"Coletar as informações"},{"id":"ab64aa23-c641-4629-814a-d1268778e8bc","value":"Manter atualizados os dados institucionais e de cursos"},{"id":"0de7ca3f-3716-4688-b6b2-72e9e98fd42a","value":"Encaminhar e-mail para os setores da UFCSPA envolvidos nos respectivos processos"},{"id":"94689f79-0bfe-483f-beea-f96fff8981a6","value":"Encaminhar documentação e/ou informações requisitadas"},{"id":"6326618a-eaa9-4811-940a-4d9cd4cd76b2","value":"Documentações/informações estão corretas/completas?"},{"id":"fe2e7ae6-96ec-40a9-9b71-0cea06a26fe1","value":"Alimentar o sistema do e-MEC"},{"id":"885fc277-4cee-4876-a5c7-fcbd64cf4847","value":"Corrigir ou complementar documentação/informações"},{"id":"7e3bf24b-ecf1-4469-a966-c501d1c8c40d","value":"Cadastro e-MEC atualizado"},{"id":"1869ecbf-2415-4258-90fd-a79d3bf9915f"},{"id":"438d5540-2468-461b-a3fa-7ca9d0da7ce7"},{"id":"d4b66247-3f51-4411-a640-dfed6419fde4"},{"id":"73525bb1-d972-4689-a7b5-8da4284f5eb7"},{"id":"cf4b1c74-e6d0-4adc-8c41-25c1527946d9"},{"id":"5bc914ab-50fd-4d47-9a0f-e3976dd2b5da"}]}]}