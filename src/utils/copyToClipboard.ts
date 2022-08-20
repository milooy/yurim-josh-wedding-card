type onSuccess = (text: string) => void;

function fallbackCopyTextToClipboard(text: string, onSuccess: onSuccess) {
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
    onSuccess(text);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text: string, onSuccess: onSuccess) {
  if (!navigator.clipboard || /kakaotalk/gi.test(navigator.userAgent)) {
    fallbackCopyTextToClipboard(text, onSuccess);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function () {
      onSuccess(text);
    },
    function (err) {
      console.error('Async: Could not copy text: ', err);
    },
  );
}

export default copyTextToClipboard;
