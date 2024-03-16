FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/Afx-Nasim/Xero-Bot/root/Xero-Bpt/
WORKDIR /root/Xero-Bot/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
