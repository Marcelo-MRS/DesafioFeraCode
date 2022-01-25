import Snackbar from 'react-native-snackbar';

export default class SnackBarService {
  static async exibe(mensagem, cor) {
    await new Promise(resolve => setTimeout(resolve, 500));
    Snackbar.show({
      text: mensagem,
      duration: 4000,
      backgroundColor: cor,
    });
  }
}
