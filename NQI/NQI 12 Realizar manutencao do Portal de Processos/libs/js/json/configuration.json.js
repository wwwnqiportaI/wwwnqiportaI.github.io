Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[NQI] 12 Realizar manutenção do Portal de Processos","publishDate":"10/08/2022 11:16:40","pages":[{"id":"922e844b-3a7b-4603-b6c6-5d75cd6705cb","name":"[NQI] 12 Realizar manutenção do Portal de Processos","version":"1.0","author":"andressabo","image":"files\\diagrams\\NQI]_12_Realizar_manutencao_do_Portal_de_Processos.png","isSubprocessPage":false,"elements":[{"id":"627290d9-df1b-438c-bcaf-8bb6a7224e7f","name":"[NQI] 12 Realizar manutenção do Portal de Processos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":548.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f45ee490-4835-4025-933a-2ac667a2182d","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":129.0,"y":247.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5c19173a-0c58-4b3e-aeb7-000a1cc5f5f9","name":"Verificar registros  internos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":241.0,"y":232.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"01f588e3-6d59-4e73-a3fc-273466c81766","name":"A unidade já possui página no Portal de Processos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":427.0,"y":242.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"96d1dd13-e70b-4291-ac66-5237c1de54cf","name":"[NQI] 12-01 Criar página da unidade da UFCSPA","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":590.0,"y":155.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NQI] 12-01 Criar página da unidade da UFCSPA - [NQI] 12-01 Criar página de unidade da UFCSPA","type":"url","pageRef":"15e781db-8332-42a9-bd3a-a82a9f920972","processPageRef":"138f34b0-d3d3-488c-ab8b-8defc6144f90"}]},{"id":"8bd8fe88-b75b-4738-985e-214959a1fa28","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":758.0,"y":245.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Atualizar a tabela de controle do Portal de Processos","elementType":"SequenceFlow","properties":[]}]},{"id":"e8fe5aa2-4aec-4c14-b39a-9bb76dbc05cb","name":"Atualizar a tabela de controle do Portal de Processos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":849.0,"y":233.0}],"radius":0.0,"height":64.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d2fa0486-f3c4-4d52-b0f9-b9f21e2b3f08","name":"Sinalizar conclusão do registro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1019.0,"y":235.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ad20e453-62e6-4305-8382-8cf4e8a5fd46","name":"Todos os registros  foram concluídos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1194.0,"y":245.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c6e574dc-f28f-4a39-a3c0-f88971375b14","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1315.0,"y":250.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"4f46cf2b-83bc-49e0-bd67-3cdb629fb02e","name":"[NQI] 12-02 Inserir artefato na página existente","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":588.0,"y":337.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NQI] 12-02 Inserir artefato na página existente - [NQI] 12-02 Inserir artefato na página existente","type":"url","pageRef":"d52da383-057d-4881-9a00-7d437865e3d1","processPageRef":"597efa9c-2f9e-4ea3-bc97-0245c4ad37e5"}]},{"id":"31575194-e02e-4f50-bed5-245eefb0c157","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":548.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"15e781db-8332-42a9-bd3a-a82a9f920972","name":"[NQI] 12-01 Criar página da unidade da UFCSPA","version":"1.0","author":"andressabo","image":"files\\diagrams\\NQI]_12_01_Criar_pagina_da_unidade_da_UFCSPA.png","isSubprocessPage":false,"elements":[{"id":"138f34b0-d3d3-488c-ab8b-8defc6144f90","name":"[NQI] 12-01 Criar página de unidade da UFCSPA","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":543.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"2a71fbab-70e1-4e79-b955-254e51584274","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":119.0,"y":237.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"0904372e-40e8-457e-b44e-3efa337a6219","name":"Acessar o Portal de Processos como administrador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":182.0,"y":222.5}],"radius":0.0,"height":61.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"57be596f-b9bc-4eba-9993-82bd35cabf45","name":"Criar link na página","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":341.0,"y":222.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"abffc061-295a-4b8a-804a-fddc194e7283","name":"Reunir informações para a criação da página","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":497.0,"y":220.0}],"radius":0.0,"height":65.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3866d0e-929a-45c8-a3ac-f3b8125befee","name":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":675.0,"y":222.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal - [NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","type":"url","pageRef":"f21b6b8c-6508-43ee-b6ce-012e5cc47852","processPageRef":"6acc58af-9eca-4b1a-946b-77b99b74aad2"}]},{"id":"90f9b3e9-2325-4f0a-85ab-753a23d2b323","name":"Inserir arquivos no servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":842.0,"y":222.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cc7811f0-2dc1-4791-98af-6ff3b0bf02c3","name":"Gerar texto da página ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":842.5,"y":386.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c7528cc-84be-4aa2-96a4-cb6b5ad96ff6","name":"Copiar texto gerado para a página","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":999.0,"y":386.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1a7dd769-076c-4b14-95bb-b5bce8a97ffe","name":"Verificar conformidade da página","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1179.0,"y":386.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f21ceb5a-5b3c-427c-b0a8-4e106f50d7e8","name":"Página conforme o previsto?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1204.0,"y":76.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"926051fc-854c-4568-9a61-488702900ddd","name":"Adicionar a página na lista da unidade de vínculo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1303.0,"y":65.5}],"radius":0.0,"height":63.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d0de486-70dd-42c4-8fe4-d7cc1e86838f","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1487.0,"y":81.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"3fc18913-6168-409e-bc0b-6f802ef62aeb","name":"Imagem","elementImage":"files\\bpmnElements\\3fc18913-6168-409e-bc0b-6f802ef62aeb.png","imageBounds":{"points":[{"x":990.0,"y":251.0}],"radius":0.0,"height":102.0,"width":150.0,"shape":"rect"},"elementType":"ImageArtifact"},{"id":"069410dc-c15d-464e-b0f2-10f78c5f1ac2","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":543.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"f21b6b8c-6508-43ee-b6ce-012e5cc47852","name":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","version":"1.0","author":"andressabo","image":"files\\diagrams\\NQI]_12_01_01_Gerar_arquivos_de_artefato_no_padrao_do_portal.png","isSubprocessPage":false,"elements":[{"id":"6acc58af-9eca-4b1a-946b-77b99b74aad2","name":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":694.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"b9b60b80-a4e8-48a0-a5a6-d7fe8661b223","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":125.0,"y":225.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"fc4de665-1228-49d1-b944-f045f83c5ec5","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":187.0,"y":220.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8ddafd51-387a-4ebc-a417-5146a1284610","name":"Revisar se há processos a serem vinculados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":233.0,"y":300.0}],"radius":0.0,"height":68.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b9716ebb-8470-4403-ac00-5d3c98974312","name":"Há processos a serem vinculados?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":391.0,"y":314.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Gerar arquivos BPMN em formato web","elementType":"SequenceFlow","properties":[]},{"name":"Acessar a página da unidade dona do processo vinculado ","elementType":"SequenceFlow","properties":[]}]},{"id":"ff3bff90-b686-4254-85ed-aaf856bfb159","name":"Acessar a página da unidade dona do processo vinculado ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":360.0,"y":419.0}],"radius":0.0,"height":62.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c0cad38d-0795-4ca0-a2f8-e8f718b45c63","name":"Copiar o link do processo a ser vinculado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":366.0,"y":514.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5b61bdea-43c7-4cc5-be0d-44f1f2113957","name":"Fazer o devido vínculo no diagrama BPMN","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":363.5,"y":612.0}],"radius":0.0,"height":67.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e24823ad-d0ae-4965-9ccc-ff88fe15f377","name":"Atualizar a Matriz Institucional de Rastreabilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":550.72,"y":612.0}],"radius":0.0,"height":67.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4c7091d1-5f61-44da-a1d4-4edd0afd04a0","name":"Gerar arquivos BPMN em formato web","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":553.72,"y":304.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fcad76c4-d425-4ef6-9bed-b46eaa1ecfee","name":"Gerar arquivos de texto em formato PDF","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":418.0,"y":114.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d87f1c87-c15f-46d0-993f-589c7fb0e3af","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":666.0,"y":206.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"47cb35fb-0eef-4df1-88c0-75b6ef51778b","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":752.0,"y":211.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"2cf73ade-d1cc-42ec-9469-62c3b4e04dcc","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":694.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"d52da383-057d-4881-9a00-7d437865e3d1","name":"[NQI] 12-02 Inserir artefato na página existente","version":"1.0","author":"andressabo","image":"files\\diagrams\\NQI]_12_02_Inserir_artefato_na_pagina_existente.png","isSubprocessPage":false,"elements":[{"id":"597efa9c-2f9e-4ea3-bc97-0245c4ad37e5","name":"[NQI] 12-02 Inserir artefato na página existente","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":548.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"276ef0da-6c36-44fd-82b7-2294bf0c21f5","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":112.0,"y":235.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"76fe3f82-f073-4d8c-a92a-2e221e43192d","name":"Acessar a pasta onde o artefato está armazenado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":184.0,"y":218.0}],"radius":0.0,"height":65.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"82e6d24a-b60e-4cc9-b94a-af0ae637ed72","name":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":328.0,"y":220.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal - [NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","type":"url","pageRef":"f21b6b8c-6508-43ee-b6ce-012e5cc47852","processPageRef":"6acc58af-9eca-4b1a-946b-77b99b74aad2"}]},{"id":"85cf26fc-9921-40e1-9f0e-51ea35161e5d","name":"Acessar a pasta da unidade no servidor do Portal de Processsos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":484.0,"y":219.5}],"radius":0.0,"height":63.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5931492a-bcfa-4e30-a24b-57978e4f923a","name":"Há uma versão anterior do artefato a ser inserido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":711.0,"y":230.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"bfda171f-bc27-4014-9386-47bef9864cee","name":"Substituir a versão anterior do arquivo pela atual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":679.5,"y":373.0}],"radius":0.0,"height":66.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce9814f6-29c6-46c3-b00a-2049a1a6596b","name":"Atualizar data da versão do artefato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":854.0,"y":376.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b974b58-02f1-4a21-9257-dd3c61df7418","name":"Verificar lista de arquivos a inserir","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":980.0,"y":221.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8a9c6228-4c96-4d2d-8348-adb3b90d4357","name":"Todos os artefatos de processos foram inseridos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1132.0,"y":231.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b3a26617-5ee0-4025-b65e-6a364ed99cf5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1254.0,"y":236.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"21c5cf9b-1617-409d-ab80-75bf93caa160","name":"Adicionar arquivo na pasta da unidade no servidor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":683.0,"y":105.0}],"radius":0.0,"height":65.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"32184449-2e9d-4063-b1a5-e4341a6309b3","name":"Inserir linha na tabela de processos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":846.0,"y":107.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ede112f3-ccad-4b08-9ea0-278d13888fcf","name":"NQI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":548.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"15e781db-8332-42a9-bd3a-a82a9f920972","containerName":"[NQI] 12-01 Criar página da unidade da UFCSPA","isSubprocess":false,"elements":[{"id":"138f34b0-d3d3-488c-ab8b-8defc6144f90","value":"[NQI] 12-01 Criar página de unidade da UFCSPA"},{"id":"069410dc-c15d-464e-b0f2-10f78c5f1ac2","value":"NQI"},{"id":"2a71fbab-70e1-4e79-b955-254e51584274","value":""},{"id":"0904372e-40e8-457e-b44e-3efa337a6219","value":"Acessar o Portal de Processos como administrador"},{"id":"57be596f-b9bc-4eba-9993-82bd35cabf45","value":"Criar link na página"},{"id":"abffc061-295a-4b8a-804a-fddc194e7283","value":"Reunir informações para a criação da página"},{"id":"90f9b3e9-2325-4f0a-85ab-753a23d2b323","value":"Inserir arquivos no servidor"},{"id":"a3866d0e-929a-45c8-a3ac-f3b8125befee","value":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal"},{"id":"cc7811f0-2dc1-4791-98af-6ff3b0bf02c3","value":"Gerar texto da página "},{"id":"6c7528cc-84be-4aa2-96a4-cb6b5ad96ff6","value":"Copiar texto gerado para a página"},{"id":"1a7dd769-076c-4b14-95bb-b5bce8a97ffe","value":"Verificar conformidade da página"},{"id":"f21ceb5a-5b3c-427c-b0a8-4e106f50d7e8","value":"Página conforme o previsto?"},{"id":"926051fc-854c-4568-9a61-488702900ddd","value":"Adicionar a página na lista da unidade de vínculo"},{"id":"9d0de486-70dd-42c4-8fe4-d7cc1e86838f","value":""},{"id":"17d76993-7f88-42c0-9c96-21ad547f5fbd"},{"id":"bff08c6b-25fb-491b-8014-07f40ff4964c"},{"id":"6d7e7bcc-5d84-477e-a12c-a8200b6d8518"},{"id":"3fc18913-6168-409e-bc0b-6f802ef62aeb","value":""},{"id":"e792764e-6059-428d-ba09-0ef67fc5af4e"},{"id":"c75fb38d-4adb-41df-a220-f30c659bb24c"},{"id":"5b982dda-8801-44c8-aa2e-35126d510a2f"},{"id":"65723042-92f7-4f9d-a319-771e9536705b"},{"id":"757dc441-8dfc-487d-b3d7-ecd7d1b85410"},{"id":"31a8fc70-01e1-4ab5-aa38-2c441b7793e3"},{"id":"fd151935-c891-4e07-9f49-42b6915ab3c5"},{"id":"78078333-40af-4f11-893f-5e4a4fdfd772"},{"id":"310964a0-6c29-46d7-afa8-32790ffccaad"},{"id":"6f818356-d3c9-4369-934d-0401285b4d51"},{"id":"2d689464-0b41-4c6c-bf04-9ee4d5f68dcc"},{"id":"a8a97dd0-470c-47cf-b98c-2cd671b1d5c5"}]},{"containerId":"922e844b-3a7b-4603-b6c6-5d75cd6705cb","containerName":"[NQI] 12 Realizar manutenção do Portal de Processos","isSubprocess":false,"elements":[{"id":"627290d9-df1b-438c-bcaf-8bb6a7224e7f","value":"[NQI] 12 Realizar manutenção do Portal de Processos"},{"id":"31575194-e02e-4f50-bed5-245eefb0c157","value":"NQI"},{"id":"f45ee490-4835-4025-933a-2ac667a2182d","value":""},{"id":"01f588e3-6d59-4e73-a3fc-273466c81766","value":"A unidade já possui página no Portal de Processos?"},{"id":"4f46cf2b-83bc-49e0-bd67-3cdb629fb02e","value":"[NQI] 12-02 Inserir artefato na página existente"},{"id":"96d1dd13-e70b-4291-ac66-5237c1de54cf","value":"[NQI] 12-01 Criar página da unidade da UFCSPA"},{"id":"8bd8fe88-b75b-4738-985e-214959a1fa28","value":""},{"id":"c6e574dc-f28f-4a39-a3c0-f88971375b14","value":""},{"id":"e8fe5aa2-4aec-4c14-b39a-9bb76dbc05cb","value":"Atualizar a tabela de controle do Portal de Processos"},{"id":"5c19173a-0c58-4b3e-aeb7-000a1cc5f5f9","value":"Verificar registros  internos"},{"id":"d2fa0486-f3c4-4d52-b0f9-b9f21e2b3f08","value":"Sinalizar conclusão do registro"},{"id":"ad20e453-62e6-4305-8382-8cf4e8a5fd46","value":"Todos os registros  foram concluídos?"},{"id":"6fd5256c-0329-45ec-b975-a2d24572d09b"},{"id":"c4392005-aaaf-4558-a9d9-cf30ff3d3c8f"},{"id":"e939ebb5-0906-466d-aaf2-cd13ccec4a96"},{"id":"4aebed29-697f-4a3a-a277-719c8a202464"},{"id":"dbd74a84-1e87-48e9-9f13-8a9a7250a67e"},{"id":"817ac32f-190b-4bec-b8cb-acc0212843fb"}]},{"containerId":"d52da383-057d-4881-9a00-7d437865e3d1","containerName":"[NQI] 12-02 Inserir artefato na página existente","isSubprocess":false,"elements":[{"id":"597efa9c-2f9e-4ea3-bc97-0245c4ad37e5","value":"[NQI] 12-02 Inserir artefato na página existente"},{"id":"ede112f3-ccad-4b08-9ea0-278d13888fcf","value":"NQI"},{"id":"276ef0da-6c36-44fd-82b7-2294bf0c21f5","value":""},{"id":"76fe3f82-f073-4d8c-a92a-2e221e43192d","value":"Acessar a pasta onde o artefato está armazenado"},{"id":"82e6d24a-b60e-4cc9-b94a-af0ae637ed72","value":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal"},{"id":"85cf26fc-9921-40e1-9f0e-51ea35161e5d","value":"Acessar a pasta da unidade no servidor do Portal de Processsos"},{"id":"5931492a-bcfa-4e30-a24b-57978e4f923a","value":"Há uma versão anterior do artefato a ser inserido?"},{"id":"bfda171f-bc27-4014-9386-47bef9864cee","value":"Substituir a versão anterior do arquivo pela atual"},{"id":"21c5cf9b-1617-409d-ab80-75bf93caa160","value":"Adicionar arquivo na pasta da unidade no servidor"},{"id":"ce9814f6-29c6-46c3-b00a-2049a1a6596b","value":"Atualizar data da versão do artefato"},{"id":"1b974b58-02f1-4a21-9257-dd3c61df7418","value":"Verificar lista de arquivos a inserir"},{"id":"8a9c6228-4c96-4d2d-8348-adb3b90d4357","value":"Todos os artefatos de processos foram inseridos?"},{"id":"b3a26617-5ee0-4025-b65e-6a364ed99cf5","value":""},{"id":"32184449-2e9d-4063-b1a5-e4341a6309b3","value":"Inserir linha na tabela de processos"},{"id":"7ecd47ea-74e3-4b3e-9a5f-822bb1bd42a6"},{"id":"df4563db-ee50-46f2-8bcf-c22d69f1edda"},{"id":"54a03f40-f217-40cc-ae4e-ae3b3b493698"},{"id":"4b35c644-a4fe-436a-8a3f-2d6e4138dec1"},{"id":"71a1a030-a2c5-410a-8924-283fee96acee"},{"id":"b7cd7bff-b17b-4603-98a9-823381d7174e"},{"id":"7661dcf1-edad-4128-8501-f16c604d3872"},{"id":"23ef7020-dd92-4b13-b76b-ce55eb889179"}]},{"containerId":"f21b6b8c-6508-43ee-b6ce-012e5cc47852","containerName":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal","isSubprocess":false,"elements":[{"id":"6acc58af-9eca-4b1a-946b-77b99b74aad2","value":"[NQI] 12-01-01 Gerar arquivos de artefato no padrão do portal"},{"id":"2cf73ade-d1cc-42ec-9469-62c3b4e04dcc","value":"NQI"},{"id":"b9b60b80-a4e8-48a0-a5a6-d7fe8661b223","value":""},{"id":"fc4de665-1228-49d1-b944-f045f83c5ec5","value":""},{"id":"fcad76c4-d425-4ef6-9bed-b46eaa1ecfee","value":"Gerar arquivos de texto em formato PDF"},{"id":"4c7091d1-5f61-44da-a1d4-4edd0afd04a0","value":"Gerar arquivos BPMN em formato web"},{"id":"d87f1c87-c15f-46d0-993f-589c7fb0e3af","value":""},{"id":"47cb35fb-0eef-4df1-88c0-75b6ef51778b","value":""},{"id":"8ddafd51-387a-4ebc-a417-5146a1284610","value":"Revisar se há processos a serem vinculados"},{"id":"b9716ebb-8470-4403-ac00-5d3c98974312","value":"Há processos a serem vinculados?"},{"id":"ff3bff90-b686-4254-85ed-aaf856bfb159","value":"Acessar a página da unidade dona do processo vinculado "},{"id":"c0cad38d-0795-4ca0-a2f8-e8f718b45c63","value":"Copiar o link do processo a ser vinculado"},{"id":"5b61bdea-43c7-4cc5-be0d-44f1f2113957","value":"Fazer o devido vínculo no diagrama BPMN"},{"id":"e24823ad-d0ae-4965-9ccc-ff88fe15f377","value":"Atualizar a Matriz Institucional de Rastreabilidade"},{"id":"70249c99-1e93-49d2-a2d6-79dc1014a2e5"},{"id":"80abf844-0aba-4b57-89ac-b6c558ccc9d9"},{"id":"dbc5fa07-6534-4757-8e23-ecbed5c0b446"},{"id":"83d18ce5-a328-4dc6-bc42-225bf36c1e2c"},{"id":"644b67fc-2763-43b5-a7ba-a11392273962"},{"id":"abc7474b-7f9a-4659-95db-16cdf0b28a20"}]}]}