const setText = (id, value) => {
  const element = document.getElementById(id);

  if (element && value != null) {
    element.textContent = value;
  }
};

const createDownloadUrl = (downloadId, version) => {
  return `https://mods.vintagestory.at/download/${downloadId}/Waypoints+NextGen+${version}.zip`;
};


setText("stable-version", CONFIG.stableVersion);
setText("development-version", CONFIG.developmentVersion);
setText("development-version-hero", CONFIG.developmentVersion);

setText("development-version-experimental", CONFIG.developmentVersion);
setText("experimental-title", CONFIG.experimentalTitle);
const experimentalDescription = document.getElementById("experimental-description");
if (experimentalDescription) {
  for (const text of CONFIG.experimentalParagraphs) {
    const paragraph = document.createElement("p");

    paragraph.textContent = text.replace(
      "{version}",
      CONFIG.developmentVersion
    );

    experimentalDescription.appendChild(paragraph);
  }
}
const stepsContainer = document.getElementById("experimental-steps");
if (stepsContainer) {
  CONFIG.experimentalSteps.forEach((step, index) => {
    const stepElement = document.createElement("div");
    stepElement.className = "step";

    const number = document.createElement("strong");
    number.textContent = index + 1;

    const content = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = step.title;

    const description = document.createElement("p");
    description.textContent = step.description;

    content.appendChild(title);
    content.appendChild(description);

    stepElement.appendChild(number);
    stepElement.appendChild(content);

    stepsContainer.appendChild(stepElement);
  });
}



const stableDownload = document.getElementById("stable-download");

if (stableDownload) {
  stableDownload.href = createDownloadUrl(
    CONFIG.stableDownloadId,
    CONFIG.stableVersion
  );
}


const developmentDownload =
  document.getElementById("development-download");

if (developmentDownload) {
  developmentDownload.href = createDownloadUrl(
    CONFIG.developmentDownloadId,
    CONFIG.developmentVersion
  );
}


const experimentalSection =
  document.getElementById("automatic");

if (
  experimentalSection &&
  CONFIG.experimentalEnabled === false
) {
  experimentalSection.hidden = true;
}