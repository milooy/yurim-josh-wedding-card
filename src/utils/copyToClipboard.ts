function fallbackCopyTextToClipboard(text: string) {
  var textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    alert(err);
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text: string, onSuccess: (text: string) => void) {
  if (!navigator.clipboard || /kakaotalk/.test(navigator.userAgent)) {
    alert('카카오톡은 여기로');
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      onSuccess(text);
    },
    function (err) {
      alert(err);
      console.error('Async: Could not copy text: ', err);
    },
  );
}

export default copyTextToClipboard;
