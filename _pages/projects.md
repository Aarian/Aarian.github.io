---
layout: archive
title: "Projects"
permalink: /portfolio/
author_profile: true
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/mylib.css">
Here, I have listed some of my works, based on their applications.  


<!-- Time Series/ Sequence Analysis -->
<ul>
    <li onclick="toggleVisibility('time-series')"><h2>Time Series/ Sequence Analysis</h2> &#9660;
        <ul id="time-series" style="display: none;">
            <!-- ASR -->
            <li>
                <p><strong>Automatic Speech Recognition(ASR) using wave2vec.</strong></p>
                <button id="ASR" onclick="toggleVisibility('ASR-content')" class="custom-button">Main idea</button>
                <div id="ASR-content" style="display: none;" class="content">
                    <p> Using self-supervised learning on a huge amount of speech data for ASR task. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- GLM -->
            <li>
                <p><strong>Generative Language Model</strong></p>
                <button id="GLM" onclick="toggleVisibility('GLM-content')" class="custom-button">Main idea</button>
                <div id="GLM-content" style="display: none;" class="content">
                    <p> Here a transformer-based model is used to learn the distribution of text data and finally generate related data, as samples. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- MTR -->
            <li>
                <p><strong>Machine Translation</strong></p>
                <button id="MTR" onclick="toggleVisibility('MTR-content')" class="custom-button">Main idea</button>
                <div id="MTR-content" style="display: none;" class="content">
                    <p> Using a seq2seq model using a GRU based Encoder/ Decoder Attentive model. <span class="code-style">Tech: Python, speechbrain</span></p>
                </div>
            </li>
            <!-- STA -->
            <li>
                <p><strong>Air pollution prediction based on statistical models, random processes (GARCH / ARIMA(X) / SARIMA / ETS)</strong></p>
                <button id="STA" onclick="toggleVisibility('STA-content')" class="custom-button">Main idea</button>
                <div id="STA-content" style="display: none;" class="content">
                    <p> Many time series are non-stationary, making it hard to follow and estimate their future values. In this work, random processes mentioned above were used to tackle some issues like trends, seasonality, volatility clustering, etc. <span class="code-style">Tech: Python, Stats.model.</span></p>
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
                <button id="WTR" onclick="toggleVisibility('WTR-content')" class="custom-button">Main idea</button>
                <div id="WTR-content" style="display: none;" class="content">
                    <p> Designing an efficient statistical detector to classify the watermarked coefficients from the clear one. The Generalized Gaussian as a prior for contourlet coefficient is employed, and ROC curve is used to evaluate the designed statistical detector. <span class="code-style">Matlab</span></p>
                </div>
            </li>
            <!-- RND -->
            <li>
                <p><strong>Injecting a text message into a 12 channels electrocardiogram signal based on pseudo-random permutation. (B.Sc. Project)</strong></p>
                <button id="RND" onclick="toggleVisibility('RND-content')" class="custom-button">Main idea</button>
                <div id="RND-content" style="display: none;" class="content">
                    <p> The key point relies on erratically, by a pseudo-random permutation algorithm, change the channels order, without information loss. <span class="code-style">Matlab</span></p>
                </div>
            </li>
        </ul>
    </li>
</ul>

<!-- Image Denoising -->
<ul>
    <li onclick="toggleVisibility('image-denoising')"><h2>Image Denoising</h2> &#9660;
        <ul id="image-denoising" style="display: none;">
            <!-- NOI -->
            <li>
                <p><strong>Image Multiplicative Noise Removal Using Statistical Modeling In The Shearlet Domain. (M.Sc. Thesis)</strong></p>
                <button id="NOI" onclick="toggleVisibility('NOI-content')" class="custom-button">Main idea</button>
                <div id="NOI-content" style="display: none;" class="content">
                    <p> Noise, and distortions, especially multiplicative noise, cause granular effects on images. The pivotal point of this work is to remove such effects by transferring the image to the shearlet domain, and statistically model the coefficients to obtain an efficient estimator. For more details please check my <a href="/publications">publications</a>. <span class="code-style">Matlab</span></p>
                </div>
            </li>
        </ul>
    </li>
</ul>