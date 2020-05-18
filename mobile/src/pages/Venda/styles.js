import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,  
    paddingTop: Constants.statusBarHeight - 20,
    backgroundColor: "#cd6133"
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 10,     
  },
  header: {            
    flexDirection: "row",
    alignItems: "center",   
  },
  headerTitle: {    
    flex: 1,    
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd32a",  
    marginLeft: 10  
  },
  botaoBack: {
    color: "#ffd32a",
    fontSize: 30,
    paddingHorizontal: 5,
  },
  vendaContainer: {
    flex: 1,
    padding: 10,    
    borderRadius: 8,
    backgroundColor: "#FFF", 
    marginVertical: '10%',
  },
  radioTipoPagamento: { 
    marginTop: 20,   
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ffd32a",
  },  
  pickerPagamento: {
    height: 30,                    
    marginBottom: 5,
    width: '100%',
  },
  pickerTranportadora: {
    height: 30,                    
    marginBottom: 5,
    width: '55%',
  },
  textFrete: {
    fontSize: 14,
    color:"#10ac84",
    fontWeight: "bold",
    marginBottom: 5,
  },
  enderecoContainer: {
    marginTop: 30,    
  },  
  footer: {    
    alignItems: "center",
    backgroundColor: "#b55831",  
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  botaoFinalizarText: {
    fontWeight: "bold",    
    fontSize: 18,
    color: "#FFF",   
    backgroundColor: "#10ac84",
    paddingHorizontal: 15,
    paddingVertical: 10,  
    borderRadius: 8,
  },
});