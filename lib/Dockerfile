FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/Afx-Nasim/xero-whatsapp-bot/root/xero-whatsapp-bot/
WORKDIR /root/xero-whatsapp-bot/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
