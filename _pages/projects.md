---
layout: archive
title: "Projects"
permalink: /portfolio/
author_profile: true
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/mylib.css">
Here, I have listed some of my works, based on their applications. Please click on each topic to go the main project idea and its implementation. 


<!-- Image Denoising -->
<ul>
    <li onclick="toggleVisibility('image-denoising')"><h2>Image Denoising</h2> &#9660;
        <ul id="image-denoising" style="display: none;">
            <!-- NOI -->
            <li>
                <p><strong>Image Multiplicative Noise Removal Using Statistical Modeling In The Shearlet Domain. (M.Sc. Thesis)</strong></p>
                <button id="NOI" onclick="toggleVisibility('NOI-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <button id="NOI-Code" onclick="toggleVisibility('NOI-Code-content'); event.stopPropagation();" class="custom-button">Code</button>
                <div id="NOI-content" style="display: none;" class="content">
                    <p> Noise, and distortions, especially multiplicative noise, cause granular effects on images. The pivotal point of this work is to remove such effects by transferring the image to the shearlet domain, and statistically model the coefficients to obtain an efficient estimator. For more details please check my <a href="/publications">publications</a>. <span class="code-style">Matlab</span></p>
                </div>
                <div id="NOI-Code-content" style="display: none;" class="content">
                    <p> For implementations please check my <a href="/publications">publications.</a></p>
                </div>
            </li>
        </ul>
    </li>
</ul>

<!-- Time Series/ Sequence Analysis -->
<ul>
    <li onclick="toggleVisibility('time-series')"><h2>Time Series/ Sequence Analysis</h2> &#9660;
        <ul id="time-series" style="display: none;">
            <!-- FwFw -->
            <li>
                <p><strong>Forward Forward algorithm on speaker identification.</strong></p>
                <button id="FwFw" onclick="toggleVisibility('FwFw-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/Forward_Forward_TimeSeries" target="_blank" class="custom-button">Code</a>
                <div id="FwFw-content" style="display: none;" class="content">
                    <p> Here I have implemented the <a href="https://arxiv.org/abs/2212.13345">forward-forward algorithm</a> for the time series (speech) data, for my conversational AI course. The <span class="code-style">.ipynb</span> file is self contained and has all the detailed information. I also used <a href="https://github.com/mpezeshki/pytorch_forward_forward">this implementation</a> for digit classification and was extended to time series data. <span class="code-style">Tech: Python, Pytorch</span></p>
                </div>
            </li>
            <!-- ASR -->
            <li>
                <p><strong>Automatic Speech Recognition(ASR) using hybryd attention + CTC model.</strong></p>
                <button id="ASR" onclick="toggleVisibility('ASR-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/ASR_CTC" target="_blank" class="custom-button">Code</a>
                <div id="ASR-content" style="display: none;" class="content">
                    <p> Using CRDNN model and CTC loss for ASR task. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- GLM -->
            <li>
                <p><strong>Generative Language Model</strong></p>
                <button id="GLM" onclick="toggleVisibility('GLM-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/GenerativeLM" target="_blank" class="custom-button">Code</a>
                <div id="GLM-content" style="display: none;" class="content">
                    <p> Here a transformer-based model is used to learn the distribution of text data and finally generate related data, as samples. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- MTR -->
            <li>
                <p><strong>Machine Translation</strong></p>
                <button id="MTR" onclick="toggleVisibility('MTR-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/Seq2Seq_MachineTranslation" target="_blank" class="custom-button">Code</a>
                <div id="MTR-content" style="display: none;" class="content">
                    <p> Machine traslation task is implemented using a seq2seq model and a GRU based Encoder/ Decoder Attentive model. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- STA -->
            <li>
                <p><strong>Air pollution prediction based on statistical models, random processes (GARCH / ARIMA(X) / SARIMA / ETS)</strong></p>
                <button id="STA" onclick="toggleVisibility('STA-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <button id="STA-Code" onclick="toggleVisibility('STA-Code-content'); event.stopPropagation();" class="custom-button">Code</button>
                <div id="STA-content" style="display: none;" class="content">
                    <p> Most of the time series are non-stationary, making it hard to follow and predict their future values. In this work, random processes mentioned above were used to learn some patterns like trends, seasonality, volatility clustering, etc. Having this gives us the flexibility to tackle with small amount of data and easier prediction on time series. <span class="code-style">Tech: Python, Stats.model.</span></p>
                </div>
                <div id="STA-Code-content" style="display: none;" class="content">
                    <p> This is a private project for AUT and the code is not shareable.</p>
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
            <!-- BDA -->
            <li>
                <p><strong>High dimentional KNN algorithm with CUR matrix approximation </strong></p>
                <button id="BDA" onclick="toggleVisibility('BDA-content'); event.stopPropagation();" class="custom-button">Main idea</button>
                <a href="https://github.com/Aarian/KNN_CUR" target="_blank" class="custom-button">Code</a>
                <div id="BDA-content" style="display: none;" class="content">
                    <p> Implementation of KNN algorithm based on a dimension reduction algorithm (CUR decomposition as low rank approximation of SVD). <span class="code-style">Python, Matlab</span></p>
                </div>
            </li>
        </ul>
    </li>
</ul>