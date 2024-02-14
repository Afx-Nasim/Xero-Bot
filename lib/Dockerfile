FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/Afx-Nasim/Xero-MD/root/Xero-MD/
WORKDIR /root/Xero-MD/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
