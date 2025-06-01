---
layout: archive
title: "Projects"
permalink: /portfolio/
author_profile: true
---
<!--<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/mylib.css"> -->
<link rel="stylesheet" href="{{ '/assets/css/mylib.css' | relative_url }}">
Here, I have listed some of my works, based on their applications. Please click on each topic to go the main project idea and its implementation. 




<!-- Time Series/ Sequence Analysis -->
<!-- Time Series/ Sequence Analysis -->
<ul>
  <li onclick="toggleVisibility('time-series')">
    <h2>Time Series/ Sequence Analysis</h2> &#9660;
    <ul id="time-series" style="display: none;">
      <li>
        <table class="project-table no-border">
          <!-- FwFw -->
          <tr>
            <td class="project-img-cell">
              <img src="{{ '/images/FWFW.png' | relative_url }}" alt="Forward Forward" class="responsive-icon img-small">
            </td>
            <td class="project-content-cell">
              <p><strong>Forward Forward algorithm on speaker identification.</strong></p>
              <div class="button-row">
                <button id="FwFw" onclick="toggleVisibility('FwFw-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/Forward_Forward_TimeSeries" target="_blank" class="custom-button">Code</a>
              </div>
              <div id="FwFw-content" style="display: none;" class="content">
                <p>Here I have implemented the <a href="https://arxiv.org/abs/2212.13345">forward-forward algorithm</a> for the time series (speech) data... <span class="code-style">Python, Pytorch</span></p>
              </div>
            </td>
          </tr>
          <!-- ASR -->
          <tr>
            <td class="project-img-cell">
              <img src="{{ '/images/CTC.png' | relative_url }}" alt="ASR CTC Model" class="responsive-icon img-small">
            </td>
            <td class="project-content-cell">
              <p><strong>Automatic Speech Recognition (ASR) using hybrid attention + CTC model.</strong></p>
              <div class="button-row">
                <button id="ASR" onclick="toggleVisibility('ASR-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/ASR_CTC" target="_blank" class="custom-button">Code</a>
              </div>
              <div id="ASR-content" style="display: none;" class="content">
                <p>Using CRDNN model and CTC loss for ASR task. <span class="code-style">Python, speechbrain</span></p>
              </div>
            </td>
          </tr>
          <!-- GLM -->
          <tr>
            <td class="project-img-cell">
              <img src="{{ '/images/Gen.png' | relative_url }}" alt="Generative LM" class="responsive-icon img-small">
            </td>
            <td class="project-content-cell">
              <p><strong>Generative Language Model</strong></p>
              <div class="button-row">
                <button id="GLM" onclick="toggleVisibility('GLM-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/GenerativeLM" target="_blank" class="custom-button">Code</a>
              </div>
              <div id="GLM-content" style="display: none;" class="content">
                <p>Here a transformer-based model is used to learn the distribution of text data and finally generate related data, as samples. <span class="code-style">Python, speechbrain</span></p>
              </div>
            </td>
          </tr>
          <!-- MTR -->
          <tr>
            <td class="project-img-cell">
              <img src="{{ '/images/MLT.png' | relative_url }}" alt="Machine Translation" class="responsive-icon img-small">
            </td>
            <td class="project-content-cell">
              <p><strong>Machine Translation</strong></p>
              <div class="button-row">
                <button id="MTR" onclick="toggleVisibility('MTR-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/Seq2Seq_MachineTranslation" target="_blank" class="custom-button">Code</a>
              </div>
              <div id="MTR-content" style="display: none;" class="content">
                <p>Machine translation task is implemented using a seq2seq model and a GRU-based Encoder/Decoder with Attention. <span class="code-style">Python, speechbrain</span></p>
              </div>
            </td>
          </tr>
          <!-- STA -->
          <tr>
            <td class="project-img-cell">
              <img src="{{ '/images/ARIMAX.png' | relative_url }}" alt="ARIMAX Model" class="responsive-icon img-small">
            </td>
            <td class="project-content-cell">
              <p><strong>Air pollution prediction based on statistical models, random processes (GARCH / ARIMA(X) / SARIMA / ETS)</strong></p>
              <div class="button-row">
                <button id="STA" onclick="toggleVisibility('STA-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <button id="STA-Code" onclick="toggleVisibility('STA-Code-content'); event.stopPropagation();" class="custom-button">Code</button>
              </div>
              <div id="STA-content" style="display: none;" class="content">
                <p>Most time series are non-stationary... <span class="code-style">Python, Stats.model.</span></p>
              </div>
              <div id="STA-Code-content" style="display: none;" class="content">
                <p>This is a private project for AUT and the code is not shareable.</p>
              </div>
            </td>
          </tr>
        </table>
      </li>
    </ul>
  </li>
</ul>

<!-- Brain Decoding -->
<ul>
  <li onclick="toggleVisibility('brain-decoding')">
    <h2>Brain Decoding</h2> &#9660;
    <ul id="brain-decoding" style="display: none;">
      <li>
        <div class="responsive-icon-block">
          <img src="{{ '/images/Brain.jpg' | relative_url }}" class="responsive-icon img-large" alt="Brain">

          <div class="responsive-content">
            <p><strong>Brain Decoding Using Connectivity Informed Models</strong></p>

            <div class="button-row">
              <button id="BRDEC" onclick="toggleVisibility('BRDEC-content'); event.stopPropagation();" class="custom-button">Main idea</button>
              <a href="https://github.com/Aarian/BrainDecoding" target="_blank" class="custom-button">Code</a>
              <a href="https://aarian.github.io/BrainDecoding/intro.html" target="_blank" class="custom-button">Jupyter Book</a>
              <a href="https://github.com/Aarian/BrainDecoding/tree/master/Slides" target="_blank" class="custom-button">Slides</a>
            </div>

            <div id="BRDEC-content" style="display: none;" class="content">
              <p>Brain decoding is a procedure for discovering the brain activity, based on its encoded data. Here a graph neural network approach has been used for training, and task classification of encoded data.</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </li>
</ul>



<!-- Image Denoising -->
<ul>
  <li onclick="toggleVisibility('image-denoising')">
    <h2>Image Denoising</h2> &#9660;
    <ul id="image-denoising" style="display: none;">
      <!-- NOI -->
      <li>
        <div class="responsive-icon-block">
         <img src="{{ '/images/TLSpaper.png' | relative_url }}" class="responsive-icon img-Large" alt="Image">

          <div class="responsive-content">
            <p><strong>Image Multiplicative Noise Removal Using Statistical Modeling In The Shearlet Domain. (M.Sc. Thesis)</strong></p>

            <div class="button-row">
              <button id="NOI" onclick="toggleVisibility('NOI-content'); event.stopPropagation();" class="custom-button">Main idea</button>
              <button id="NOI-Code" onclick="toggleVisibility('NOI-Code-content'); event.stopPropagation();" class="custom-button">Code</button>
            </div>

            <div id="NOI-content" style="display: none;" class="content">
              <p>
                Noise, and distortions, especially multiplicative noise, cause granular effects on images.
                The pivotal point of this work is to remove such effects by transferring the image to the shearlet domain,
                and statistically model the coefficients to obtain an efficient estimator.
                For more details please check my <a href="/publications">publications</a>.
                <span class="code-style">Matlab</span>
              </p>
            </div>

            <div id="NOI-Code-content" style="display: none;" class="content">
              <p> For implementations please check my <a href="/publications">publications.</a></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </li>
</ul>

<!-- Watermarking -->
<ul>
    <li onclick="toggleVisibility('watermarking')"><h2>Watermarking</h2> &#9660;
        <ul id="watermarking" style="display: none;">
            <!-- WTR -->
            <li>
                <p><strong>Statistical Analysis of Contourlet Coefficients of Watermarked Images.</strong></p>
                <button id="WTR" onclick="toggleVisibility('WTR-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/Watermark_Detector" target="_blank" class="custom-button">Code</a>
                <div id="WTR-content" style="display: none;" class="content">
                    <p> Designing an efficient statistical detector to classify the watermarked coefficients from the clear one. The Generalized Gaussian as a prior for contourlet coefficient is employed, and ROC curve is used to evaluate the designed statistical detector. <span class="code-style">Matlab</span></p>
                </div>
            </li>
            <!-- RND -->
            <li>
                <p><strong>Injecting a text message into a 12 channels electrocardiogram signal based on pseudo-random permutation. (B.Sc. Project)</strong></p>
                <button id="RND" onclick="toggleVisibility('RND-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/ECG-Watermarking" target="_blank" class="custom-button">Code</a>
                <div id="RND-content" style="display: none;" class="content">
                    <p> The key point relies on erratically, by a pseudo-random permutation algorithm, change the channels order, without information loss. <span class="code-style">Matlab</span></p>
                </div>
            </li>
        </ul>
    </li>
</ul>

<!-- Big Data -->
<ul>
    <li onclick="toggleVisibility('big-data')"><h2>Big Data Analysis</h2> &#9660;
        <ul id="big-data" style="display: none;">
            <!-- BDA-CUR -->
            <li>
                <p><strong>High dimentional KNN algorithm with CUR matrix approximation </strong></p>
                <button id="BDA" onclick="toggleVisibility('BDA-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/KNN_CUR" target="_blank" class="custom-button">Code</a>
                <div id="BDA-content" style="display: none;" class="content">
                    <p> Implementation of KNN algorithm based on a dimension reduction algorithm (CUR decomposition as low rank approximation of SVD). <span class="code-style">Python, Matlab</span></p>
                </div>
            </li>
            <!-- BDA-LSH -->
            <li>
                <p><strong>High dimentional KNN algorithm with Locality Sensitive Hashing(LSH) </strong></p>
                <button id="BDA-LSH" onclick="toggleVisibility('BDA-LSH-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/KNN_LSH.git" target="_blank" class="custom-button">Code</a>
                <div id="BDA-LSH-content" style="display: none;" class="content">
                    <p> Implementation of KNN algorithm based on Locality Sensitive Hashing(LSH). <span class="code-style">Python</span></p>
                </div>
            </li>
        </ul>
    </li>
</ul>


