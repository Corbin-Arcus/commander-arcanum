from rest_framework import serializers


class CardFaceSerializer(serializers.Serializer):
    class Meta:
        fields = '__all__'
        model = 'CardFace'

class CardSerializer(serializers.Serializer):
    class Meta:
        fields = '__all__'
        model = 'Card'