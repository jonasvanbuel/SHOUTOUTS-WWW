import { fetchPostHidden, fetchPostHiddenOptions, fetchPostHiddenOverlay } from '.';

// TODO: ONLY show postHiddenOptions if cursor position is away from symbol?

const fetchDimensions = (element) => {
  return {
    height: element.clientHeight,
    width: element.clientWidth
  }
}


const fetchTriggerCoordinates = (event) => {
  const { target, clientX, clientY } = event;

  const targetHeight = event.target.clientHeight;
  const targetWidth = event.target.clientWidth;

  const leftX = event.target.offsetLeft;
  const rightX = leftX + targetWidth;
  const centerX = leftX + (targetWidth / 2);

  const topY = event.target.offsetTop;
  const bottomY = topY + targetHeight;
  const centerY = topY + (targetHeight / 2);

  return {
    centerX,
    centerY,
    clientX,
    clientY
  };
};


const isTriggerFromCenter = (event) => {
  const triggerCoordinates = fetchTriggerCoordinates(event);
  const { centerX, centerY, clientX, clientY } = triggerCoordinates;

  const postHiddenOverlay = event.target.getElementsByClassName('post-hidden-overlay')[0];
  const unhideOption = postHiddenOverlay.getElementsByClassName('unhide-option')[0];
  const unhideOptionDimensions = fetchDimensions(unhideOption);

  const MARGIN = unhideOptionDimensions.width * 0.5;

  const isNearCenterX = () => {
    const { width } = unhideOptionDimensions;
    const range = {
      min: centerX - ((width / 2) + MARGIN),
      max: centerX + ((width / 2) + MARGIN)
    };
    console.log(clientX);
    console.log(range);

    if (clientX >= range.min && clientX <= range.max) {
      return true;
    }
    return false;
  };

  const isNearCenterY = () => {
    const { height } = unhideOptionDimensions;
    const range = {
      min: centerY - ((height / 2) + MARGIN),
      max: centerY + ((height / 2) + MARGIN)
    };
    console.log(clientY);
    console.log(range);

    if (clientY >= range.min && clientY <= range.max) {
      return true;
    }
    return false;
  };

  const nearCenterX = isNearCenterX();
  console.log(`nearCenterX: ${nearCenterX}`);
  const nearCenterY = isNearCenterY();
  console.log(`nearCenterY: ${nearCenterY}`);

  if (nearCenterX && nearCenterY) {
    return true;
  }
  return false;
};


const animatePostHiddenOptions = (taggedPost) => {
  const postHidden = fetchPostHidden(taggedPost);
  const postHiddenOptions = fetchPostHiddenOptions(taggedPost);
  const posthiddenOverlay = fetchPostHiddenOverlay(taggedPost);

  // MOUSE-ENTER
  // Only if post is hidden and not triggered from center after hiding,
  // show postHiddenOptions and hide postHiddenOverlay
  const onMouseEnterHandler = (event) => {
    const triggerFromCenter = isTriggerFromCenter(event);

    if (!triggerFromCenter) {
      if (!postHidden.classList.contains('invisible') && postHiddenOptions.classList.contains('invisible')) {
        postHiddenOptions.classList.remove('invisible');

        if (!posthiddenOverlay.classList.contains('invisible')) {
          posthiddenOverlay.classList.add('invisible');
        }
      }
    }
  };

  // MOUSE-LEAVE
  // Regardless of whether post is hidden, hide postHiddenOptions
  // Only if taggedPost is hidden, show postHiddenOverlay
  const onMouseLeaveHandler = () => {
    if (!postHiddenOptions.classList.contains('invisible')) {
      postHiddenOptions.classList.add('invisible');

      if (taggedPost.hidden && posthiddenOverlay.classList.contains('invisible')) {
        posthiddenOverlay.classList.remove('invisible');
      }
    }
  };

  if (postHidden && postHiddenOptions) {
    postHidden.addEventListener('mouseenter', onMouseEnterHandler);
    postHidden.addEventListener('mouseleave', onMouseLeaveHandler);
  }
};

export default animatePostHiddenOptions;


// if (taggedPost.hidden && postHiddenOptions.classList.contains('invisible')) {
